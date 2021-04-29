/** @format */

'use strict';

const { RESPONSE_RECEIVED } = require('../constants/order');
const order = require('../models/order');

/**
 * Add an order for an sandwich
 *
 * place an order for a sandwich
 * returns the new order when succesfull
 **/
exports.addOrder = function (Order) {
	const { orderId, total, cart } = Order.order;
	// At this point, we can say that the backend has received the order
	const status = RESPONSE_RECEIVED;

	return order.create({ orderId, total, status, cart });
};

/**
 * Find an order by its ID
 * IDs must be positive integers
 *
 * orderId Long ID of the order that needs to be fetched
 * returns Order
 **/
exports.getOrderById = function (orderId) {
	return order.findOne({ orderId });
};

/**
 * Get a list of all orders. Empty array if no orders are found.
 *
 * returns Array Of Orders
 **/
exports.getOrders = function () {
	return order.find();
};

/**
 * Updates the given Order.
 */

exports.updateOrder = function (Order) {
	const updatedResource = order
		.findByIdAndUpdate(Order['_id'], Order, {
			new: true,
		})
		.then((response) => {
			console.log('updatedResource: ', response);
		});
};
