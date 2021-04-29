/** @format */

'use strict';

const sendTask = require('./rabbit-utils/sendTask.js');
const receiveTask = require('./rabbit-utils/receiveTask.js');
const { RESPONSE_READY } = require('./constants/order.js');

const orderFinished = (body) => {
	const status = RESPONSE_READY;
	// console.log('data: ', data);
	const readyOrder = { ...body, status };
	console.log('orderFinished: ', readyOrder);
	// Send a notification that the order is finished.
	sendTask.addTask('rapid-runner-rabbit', 'finished-order', readyOrder);
};

// Rabbit queue listener
receiveTask.getTask('rapid-runner-rabbit', 'received-orders', orderFinished);
