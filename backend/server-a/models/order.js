/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
	cart: [{}],
	total: Number,
	status: String,
	orderId: Number,
});

module.exports = mongoose.model('Order', OrderSchema);
