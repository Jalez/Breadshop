#!/usr/bin/env node
/** @format */

// Process tasks from the work queue

'use strict';

var amqp = require('amqplib');

module.exports.getTask = function (rabbitHost, queueName) {
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
					console.log(' [*] Waiting for messages. To exit press CTRL+C');
				});
				return ok;

				function doWork(msg) {
					var body = msg.content.toString();
					console.log(" [x] Received '%s'", body);
					// JR: This is weird, I've no idea why secs are counted like this here
					var secs = body.split('.').length - 1;
					//console.log(" [x] Task takes %d seconds", secs);
					setTimeout(function () {
						console.log(new Date(), ' [x] Done');
						ch.ack(msg);
					}, secs * 1000);
				}
			});
		})
		.catch(console.warn);
};
