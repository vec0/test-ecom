import { fork, put, race, select, take, call } from "redux-saga/effects";
import { takeEvery } from "redux-saga/effects";
import { types } from "../cart.reducer";
import { types as userTypes } from "../user.reducer";
import { selectCartItems } from "../../select/cart.selector";

/////////////
// ACTIONS //

function* sendCartToDatabaseYield() {
	put({ type: "cart/CANCEL_CART_SENDING" });

	//	while (true) {
	//yield take("cart/START_CART_SENDING");
	yield race({
		task: call(function* (action) {
			// push cart to database
		}),
		cancel: take("cart/CANCEL_CART_SENDING"),
	});
	//	}
}

export const actions = {
	increaseItemsInCart: function* () {
		yield takeEvery(types.INCREASE_ITEMS, function* (action) {
			const cartItems = [...(yield select(selectCartItems))];
			const target = action.payload;

			let idx = cartItems.findIndex((cartItem) => cartItem.id === target.id);
			if (idx === -1) {
				idx = cartItems.length;
				cartItems.push(target);
			} else cartItems[idx] = { ...cartItems[idx] };
			cartItems[idx]["quantity"] = (cartItems[idx]["quantity"] ?? 0) + 1;

			yield put({ type: types.UPDATE_CART, payload: cartItems });
			yield fork(sendCartToDatabaseYield);
		});
	},

	removeItemFromCart: function* () {
		yield takeEvery(types.REMOVE_ITEM, function* (action) {
			const cartItems = [...(yield select(selectCartItems))];
			const target = action.payload;

			yield put({
				type: types.UPDATE_CART,
				payload: cartItems.filter((cartItem) => cartItem.id !== target.id),
			});

			yield fork(sendCartToDatabaseYield);
		});
	},

	decreaseItemsInCart: function* () {
		yield takeEvery(types.DECREASE_ITEMS, function* (action) {
			const cartItems = [...(yield select(selectCartItems))];
			const target = action.payload;

			let idx = cartItems.findIndex((cartItem) => cartItem.id === target.id);
			if (idx === -1) return;
			cartItems[idx] = { ...cartItems[idx] };
			cartItems[idx].quantity--;

			yield put({
				type: types.UPDATE_CART,
				payload:
					cartItems[idx].quantity < 1
						? cartItems.filter((cartItem) => cartItem.id !== target.id)
						: cartItems,
			});

			yield fork(sendCartToDatabaseYield);
		});
	},

	onClearCart: function* () {
		yield takeEvery([types.CLEAR_CART, userTypes.SIGN_OUT], function* (action) {
			yield put({ type: "cart/UPDATE_CART", payload: [] });
			yield fork(sendCartToDatabaseYield);
		});
	},
};
