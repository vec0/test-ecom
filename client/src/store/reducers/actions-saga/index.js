import { all, call } from "redux-saga/effects";

import { actions as shopActions } from "./shop.actions";
import { actions as cartActions } from "./cart.actions";
import { actions as userActions } from "./user.actions";

export function* combinedSaga() {
	//const qwe = Object.values(shopActions).map((a) => call(a));
	const asd = [
		...Object.values(shopActions).map((a) => call(a)),
		...Object.values(cartActions).map((a) => call(a)),
		...Object.values(userActions).map((a) => call(a)),
	];
	/* console.log(qwe);
	console.log(asd); */
	yield all(asd);
}
