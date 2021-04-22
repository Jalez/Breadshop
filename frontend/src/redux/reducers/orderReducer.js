/** @format */

import { ADD_OLD_ORDERS, ADD_ORDER, REMOVE_ORDER } from '../constants';

const orderReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_OLD_ORDERS:
			return [...action.payload];
		case ADD_ORDER:
			return state.concat(action.payload);
		case REMOVE_ORDER:
			return state.filter((item) => item.id !== action.payload.id);
		default:
			return state;
	}
};
