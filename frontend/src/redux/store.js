/** @format */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import orderReducer from './reducers/orderReducer';
import cartReducer from './reducers/cartReducer';

// Redux-devtools extension library
import { composeWithDevTools } from 'redux-devtools-extension';
import notificationReducer from './reducers/notificationReducer';

const reducer = combineReducers({
	orders: orderReducer,
	cart: cartReducer,
	notifications: notificationReducer,
});

export default createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
);
