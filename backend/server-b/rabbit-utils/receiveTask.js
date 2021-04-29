#!/usr/bin/env node
/** @format */

// Process tasks from the work queue
// in our case an order for a sandwich

'use strict';

var amqp = require('amqplib');
const sendTask = require('./sendTask.js');

module.exports.getTask = function (rabbitHost, queueName, callback) {
	amqp
		.connect('amqp://' + rabbitHost)
		.then(function (conn) {
			process.once('SIGINT', function () {
				conn.close();
			});
			return conn.createChannel().then(function (ch) {
				var ok = ch.assertQueue(queueName, { durable: true });
				ok = ok.then(function () {
					ch.prefetch(1);
				});
				ok = ok.then(function () {
					ch.consume(queueName, doWork, { noAck: false });
					console.log(
						new Date(),
						' [*] Waiting for messages. To exit press CTRL+C'
					);
				});
				return ok;

				function doWork(msg) {
					var body = JSON.parse(msg.content);
					console.log(new Date(), ' [x] Received: ', body);
					console.log(new Date(), ' [x] Its type: ', typeof body);
					var secs = 10;
					console.log(new Date(), ' [x] Task takes ' + secs + ' seconds');
					setTimeout(function () {
						console.log(new Date(), ' [x] Done');
						ch.ack(msg);
						// Call the callback.
						callback(body);
					}, secs * 1000);
				}
			});
		})
		.catch(console.warn);
};
