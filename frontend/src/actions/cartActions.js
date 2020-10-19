// bringing in axios to allow for request to be made to api/products/:id to get data fields for the specific product to add to cart
import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

// getState allows to get entire state tree (ie productList, productDetails, cart --> found in store.js)
export const addToCart = (id, qty) => async (dispatch, getState) => {
	const { data } = await axios.get(`/api/products/${id}`);

	dispatch({
		// payload === what is displayed in cart
		type: CART_ADD_ITEM,
		payload: {
			product: data._id,
			name: data.name,
			image: data.image,
			price: data.price,
			countInStock: data.countInStock,
			qty,
		},
	});

	// LS can only store stringed objects --> w/o JSON.stringify this returns JS object --> has to be parsed back to JS object when pulling out LS
	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = id => (dispatch, getState) => {
	dispatch({
		type: CART_REMOVE_ITEM,
		payload: id,
	});

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
