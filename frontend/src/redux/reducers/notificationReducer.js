/** @format */

import { NEW_NOTIFICATION } from '../constants';

const notificationReducer = (
	state = [{ message: 'Make an order!', severity: 'info' }],
	action
) => {
	switch (action.type) {
		case NEW_NOTIFICATION:
			return [action.payload, ...state];
		default:
			return state;
	}
};

export default notificationReducer;
