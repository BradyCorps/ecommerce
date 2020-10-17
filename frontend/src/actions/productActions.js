import axios from 'axios';
// These are the actual action
import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants';

// These are action reducers
// action works as fetching data akin to HomeScreen async await fetch
// Redux thunk allows for adding a function within a function '(=> async (dispatch))'
export const listProducts = () => async dispatch => {
	try {
		// Calls productReducer.js 'PRODUCT_LIST_REQUEST'
		dispatch({ type: PRODUCT_LIST_REQUEST });

		const { data } = await axios.get('/api/products');

		dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: PRODUCT_LIST_FAIL,
			// If error on get request of product list from productReducers.js --> grabbing the error from get request and displaying that message if avaliable
			// if not avaliable --> displaying plain error message
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const listProductDetails = id => async dispatch => {
	try {
		dispatch({ type: PRODUCT_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/products/${id}`);

		dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
