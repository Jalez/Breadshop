/** @format */

import {
	ADD_OLD_ORDERS,
	ADD_ORDER,
	REMOVE_ORDER,
	UPDATE_ORDER_STATE,
} from '../constants';

const orderReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_OLD_ORDERS:
			return [...action.payload];
		case ADD_ORDER:
			return state.concat(action.payload);
		case REMOVE_ORDER:
			return state.filter((item) => item.id !== action.payload.id);
		case UPDATE_ORDER_STATE:
			const index = state.findIndex((item) => item.id === action.payload.id);
			state[index].status = action.payload.status;
			return [...state];
		default:
			return state;
	}
};

export default orderReducer;
