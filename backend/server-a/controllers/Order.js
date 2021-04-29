/** @format */

'use strict';

var utils = require('../utils/writer.js');
var Order = require('../service/OrderService');
var sendTask = require('../rabbit-utils/sendTask.js');
var receiveTask = require('../rabbit-utils/receiveTask.js');

/**
 * @description addOrder-controller
 * @route POST api/order
 * @access Public
 */
module.exports.addOrder = function (req, res, next) {
	var order = req.swagger.params['order'].value;
	console.log('order: ', order);
	Order.addOrder(order)
		.then(function (response) {
			utils.writeJson(res, response);
			console.log('response: ', response);
			console.log('Type of response: ', typeof response);
			// Let's add the order to a queue
			// Notice: "rapid-runner-rabbit" is the name of the Docker Compose service
			sendTask.addTask('rapid-runner-rabbit', 'received-orders', response);
		})
		.catch(function (response) {
			utils.writeJson(res, response);
		});
};

/**
 * @description getOrderById-controller
 * @route GET api/order/:orderId
 * @access Public
 */
module.exports.getOrderById = function getOrderById(req, res, next) {
	var orderId = req.swagger.params['orderId'].value;
	Order.getOrderById(orderId)
		.then(function (response) {
			utils.writeJson(res, response);
		})
		.catch(function (response) {
			utils.writeJson(res, response);
		});
};

/**
 * @description getOrders-controller. Gets all orders.
 * @route GET api/order/
 * @access Public
 */
module.exports.getOrders = function getOrders(req, res, next) {
	Order.getOrders()
		.then(function (response) {
			utils.writeJson(res, response);
		})
		.catch(function (response) {
			utils.writeJson(res, response);
		});
};

/**
 * @description updateOrder-controller. Currently only in use by RabbitMq. So no req-res functionality required.
 * @route GET api/order/:orderId
 * @access Public
 */

function updateOrder(order) {
	Order.updateOrder(order);
}

receiveTask.getTask('rapid-runner-rabbit', 'finished-order', updateOrder);
