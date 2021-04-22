/** @format */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import orderReducer from './reducers/orderReducer';
import cartReducer from './reducers/cartReducer';

// Redux-devtools extension library
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
	orders: orderReducer,
	cart: cartReducer,
});

export default createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
);
