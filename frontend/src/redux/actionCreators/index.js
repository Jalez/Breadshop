/** @format */
import {
	ADD_CART_ITEM,
	ADD_OLD_ORDERS,
	ADD_ORDER,
	EMPTY_CART,
	REMOVE_CART_ITEM,
	REMOVE_ORDER,
	UPDATE_CART_ITEM_AMOUNT,
	UPDATE_ORDER_STATE,
} from '../constants';

export const addOrder = (newOrder) => {
	return {
		type: ADD_ORDER,
		payload: newOrder,
	};
};

export const removeOrder = (order) => {
	// Add thunk here (also remove from DB)
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
