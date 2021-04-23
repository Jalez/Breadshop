/** @format */
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
export const addOrder = (newOrder) => {
	return {
		type: ADD_ORDER,
		payload: newOrder,
	};
};

export const removeOrder = (order) => {
	// Add thunk here (to remove from DB)
	return {
		type: REMOVE_ORDER,
		payload: order,
	};
};

export const addOldOrders = () => {
	// Add thunk here.
	return {
		type: ADD_OLD_ORDERS,
		payload: [],
	};
};

export const updateOrderState = (order) => {
	// Add thunk here.
	return {
		type: UPDATE_ORDER_STATE,
		payload: order,
	};
};

// CART ACTION CREATORS
export const addCartItem = (newItem) => {
	return {
		type: ADD_CART_ITEM,
		payload: newItem,
	};
};
export const removeCartItem = (item) => {
	return {
		type: REMOVE_CART_ITEM,
		payload: item,
	};
};

export const updateCartItem = (id, amount) => {
	return {
		type: UPDATE_CART_ITEM_AMOUNT,
		payload: { id, amount },
	};
};

export const emptyCart = () => {
	return {
		type: EMPTY_CART,
	};
};

// NOTIFICATION ACTION CREATORS
export const addNotification = (newNotification) => {
	return {
		type: NEW_NOTIFICATION,
		payload: newNotification,
	};
};
