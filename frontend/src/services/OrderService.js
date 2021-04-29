/** @format */
import axios from 'axios';
const orderURL = 'http://localhost:12345/v1/order';

/**
 * Sends an HTTP GET request with the help of axios to orderURL. Gets the order with the specified id.
 * @param {String} id of the order
 * @returns {Object}
 */
export const getOrder = async (id) => {
	const response = await axios.get(orderURL + '/' + id);
	return response.data;
};

/**
 * * Sends an HTTP GET request with the help of axios to orderURL. Gets all orders.
 * @param {*} id
 * @returns
 */
export const getOrders = async (id) => {
	const response = await axios.get(orderURL);
	return response.data;
};

/**
 * Sends an HTTP POST request with the help of axios to orderURL.
 * @param {Object} order
 * @returns
 */
export const createOrder = async (newOrder) => {
	const response = await axios.post(orderURL, { order: newOrder });
	const { order } = response.data;
	return order;
};
