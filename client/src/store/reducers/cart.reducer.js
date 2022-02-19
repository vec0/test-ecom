import { takeLatest, put } from "redux-saga/effects";

///////////
// TYPES //

export const types = {
	TOGGLE_CART_HIDDEN: "cart/TOGGLE_CART_HIDDEN",
	UPDATE_CART: "cart/UPDATE_CART",

	REMOVE_ITEM: "cart/REMOVE_ITEM",
	INCREASE_ITEMS: "cart/INCREASE_ITEMS",
	DECREASE_ITEMS: "cart/DECREASE_ITEMS",
	CLEAR_CART: "cart/CLEAR_CART",
};

/////////////
// REDUCER //

const initialState = {
	hidden: true,
	cartItems: [],
};

export default function reducer(state = initialState, { type, payload }) {
	if (!state.cartItems) state.cartItems = [];
	switch (type) {
		case types.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case types.UPDATE_CART:
			state.cartItems = [...payload];
			return { ...state };
		default:
			return state;
	}
}

/////////////////////
// ACTIONS CREATOR //

export const actionsCreator = {
	toggleCartHidden: () => ({
		type: types.TOGGLE_CART_HIDDEN,
	}),

	addItem: (item) => ({
		type: types.INCREASE_ITEMS,
		payload: item,
	}),

	removeItem: (item) => ({
		type: types.REMOVE_ITEM,
		payload: item,
	}),

	increaseItems: (item) => ({
		type: types.INCREASE_ITEMS,
		payload: item,
	}),

	decreaseItems: (item) => ({
		type: types.DECREASE_ITEMS,
		payload: item,
	}),

	clearCartPayload: (item) => ({
		type: types.CLEAR_CART,
	}),
};
