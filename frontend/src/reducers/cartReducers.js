import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			// Payload has to do with the product
			const item = action.payload;

			// if item exists in cart
			const existItem = state.cartItems.find(x => x.product === item.product);

			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map(x =>
						x.product === existItem.product ? item : x
					),
				};

				// If doesnt exist
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item],
				};
			}
		case CART_REMOVE_ITEM:
			return {
				...state,
				// For each item, check if product ID is not equal to action payload, strip out whatever the ID remove is
				cartItems: state.cartItems.filter(x => x.product !== action.payload),
			};
		default:
			return state;
	}
};
