import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	productListReducer,
	productDetailsReducer,
} from './reducers/productReducers';

// reducers to go here
const reducer = combineReducers({
	// productList shows as the piece of state
	//
	productList: productListReducer,
	productDetails: productDetailsReducer,
});

// Used when store loads intially
const initialState = {};
const middleWare = [thunk];
const store = createStore(
	reducer,
	initialState,
	// whatevr is in thunk will be spread and passed through applyMiddleware
	composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
