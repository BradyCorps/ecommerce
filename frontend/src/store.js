import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	productListReducer,
	productDetailsReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

// reducers to go here
const reducer = combineReducers({
	// productList shows as the piece of state
	//
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
});

// Used when store loads intially
const cartItemsFromStorage = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: [];
// Init State can be used to store and get cartItems, token, user...etc
const initialState = {
	cart: { cartItems: cartItemsFromStorage },
};
const middleWare = [thunk];
const store = createStore(
	reducer,
	initialState,
	// whatevr is in thunk will be spread and passed through applyMiddleware
	composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
