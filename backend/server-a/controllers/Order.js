/** @format */

'use strict';

var utils = require('../utils/writer.js');
var Order = require('../service/OrderService');
var sendTask = require('../rabbit-utils/sendTask.js');
var receiveTask = require('../rabbit-utils/receiveTask.js');
/* OLD
module.exports.addOrder = function addOrder (req, res, next) {
  var order = req.swagger.params['order'].value;
  Order.addOrder(order)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
/** */
module.exports.addOrder = function addOrder(req, res, next) {
	var order = req.swagger.params['order'].value;
	Order.addOrder(order)
		.then(function (response) {
			utils.writeJson(res, response);
			console.log(order);
			// Let's add the order to a queue
			// Notice: "rapid-runner-rabbit" is the name of the Docker Compose service
			// Using only Docker networking didn't work,
			// unless Docker's bridge network IPs, were used (172.20.0.X).
			sendTask.addTask('rapid-runner-rabbit', 'received-orders', order);
		})
		.catch(function (response) {
			utils.writeJson(res, response);
		});
};

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

module.exports.getOrders = function getOrders(req, res, next) {
	Order.getOrders()
		.then(function (response) {
			utils.writeJson(res, response);
		})
		.catch(function (response) {
			utils.writeJson(res, response);
		});
};
