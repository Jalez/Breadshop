/** @format */
import axios from 'axios';
const orderURL = 'http://localhost:12345/v1/order';

export const getOrder = async (id) => {
	const response = await axios.get(orderURL + '/' + id);
	return response.data;
};

export const createOrder = async (order) => {
	const response = await axios.post(orderURL, order);
	return response.data;
};
