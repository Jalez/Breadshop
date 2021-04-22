/** @format */

import {
	ADD_CART_ITEM,
	EMPTY_CART,
	REMOVE_CART_ITEM,
	UPDATE_CART_ITEM_AMOUNT,
} from '../constants';

const cartReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_CART_ITEM:
			return state.concat(action.payload);
		case REMOVE_CART_ITEM:
			return state.filter((item) => item.id !== action.payload.id);
		case UPDATE_CART_ITEM_AMOUNT:
			const index = state.findIndex((item) => item.id === action.payload.id);
			state[index].amount = action.payload.amount;
			return [...state];
		case EMPTY_CART:
			return [];
		default:
			return state;
	}
};

export default cartReducer;
