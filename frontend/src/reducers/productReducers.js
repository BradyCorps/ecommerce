// Reducer takes in two parameters (inital state, action)
// When actionReducer is created  --> dispatch an action to this reducer
// will be an object with a type and payload

// Rather than using case strings --> created consts in productConstants.js and imported cases as consts
import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
	// evaluate type in action --> use switch
	switch (action.type) {
		// three 'types' looked for
		// productListRequest --> for fetch request
		// productListSuccess --> for successful response
		// productListFail --> for failed response
		//
		case PRODUCT_LIST_REQUEST:
			// allows component to know the information is currently loading
			return { loading: true, products: [] };
		//
		case PRODUCT_LIST_SUCCESS:
			// sends data in the state with payload after successful load
			return { loading: false, products: action.payload };
		//
		case PRODUCT_LIST_FAIL:
			// sends error in the state with payload after failed load attempt
			return { loading: false, error: action.payload };
		//
		default:
			return state;
	}
};
