/** @format */
import { createOrder, getOrder, getOrders } from '../../services/OrderService';
import {
	ADD_OLD_ORDERS,
	ADD_ORDER,
	REMOVE_ORDER,
	UPDATE_ORDER_STATE,
	ADD_CART_ITEM,
	UPDATE_CART_ITEM_AMOUNT,
	REMOVE_CART_ITEM,
	EMPTY_CART,
	NEW_NOTIFICATION,
} from '../constants';

// ORDER ACTION CREATORS
/**
 *
 * @param {Object} newOrder
 * @returns
 */
export const addOrder = (newOrder) => {
	// Add thunk here too
	return async (dispatch) => {
		// Server A not yet implemented
		// newOrder = createOrder(newOrder)
		dispatch({
			type: ADD_ORDER,
			payload: newOrder,
		});
	};
};

/**
 * Action creator that dispatches the removal action of the given order to frontend redux store once order from the DB is removed permanently -- NOT IMPLEMENTED for backend!
 * @param {} order
 * @returns
 */
export const removeOrder = (order) => {
	// Add thunk here (to remove from DB)
	return async (dispatch) => {
		// No path for it in back end (or an HTTP-request function at OrderService.js), so only dispatch here.
		dispatch({
			type: REMOVE_ORDER,
			payload: order,
		});
	};
};

/**
 * Action creator that dispatches all the orders it receives from DB to the frontends redux-stores order-state.
 * @returns {Object} action
 */
export const fetchOrders = () => {
	return async (dispatch) => {
		let orders;
		// Server A not yet implemented- uncomment when done.
		// orders = getOrders();
		dispatch({
			type: ADD_OLD_ORDERS,
			payload: orders,
		});
	};
};

/**
 * TO update the state of the specificied order.
 * @param {Object} order
 * @returns {Object} action
 */
export const updateOrderState = (order) => {
	return {
		type: UPDATE_ORDER_STATE,
		payload: order,
	};
};

// CART ACTION CREATORS

/**
 * Action creator that dispatches an action to update the cart-state.
 * @param {Object} newItem
 * @returns
 */
export const addCartItem = (newItem) => {
	return {
		type: ADD_CART_ITEM,
		payload: newItem,
	};
};

/**
 * Action creator that dispatches an action to remove an item from the cart-state.
 * @param {*} item
 * @returns
 */
export const removeCartItem = (item) => {
	return {
		type: REMOVE_CART_ITEM,
		payload: item,
	};
};

/**
 * Action creator that updates the amount of the given ID
 * @param {Number} id
 * @param {Number} amount
 * @returns {Object}
 */
export const updateCartItem = (id, amount) => {
	return {
		type: UPDATE_CART_ITEM_AMOUNT,
		payload: { id, amount },
	};
};

/**
 * An action creator which creates an action to remove cart items.
 * @returns {Object}
 */
export const emptyCart = () => {
	return {
		type: EMPTY_CART,
	};
};

// NOTIFICATION ACTION CREATORS
/**
 * An action creator which adds a new Notification to the notification-state.
 * @param {*} newNotification
 * @returns
 */
export const addNotification = (newNotification) => {
	return {
		type: NEW_NOTIFICATION,
		payload: newNotification,
	};
};
