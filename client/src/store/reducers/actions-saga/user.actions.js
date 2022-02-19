import { takeLatest, put, all, call, delay, take } from "redux-saga/effects";
import { types } from "../user.reducer";

import { PROMISE_CALL, ASYNC_CALL } from "../../../utils/utils";
import { actionsCreator } from "../user.reducer";
import { userActions } from "../../../domain-features/api/api-adapter";

/////////////
// ACTIONS //

export const syncActions = {
	onCheckUserSessionSync: function () {
		return userActions.checkCurrentSessionSync();
	},
};

export const actions = {
	authFlow: function* () {
		yield takeLatest(types.SIGN_IN_START, function* (action) {
			let authLoopTask = null;
			try {
				/* 	 authLoopTask = yield fork(types.payload === "GOOGLE" ? 
				 userActions.onGoogleSignInYield
				 
				 ); */
				const userAuth =
					action.payload === "GOOGLE"
						? yield userActions.onGoogleSignInYield()
						: yield userActions.onEmailSignInYield(action.payload);

				yield put({ type: types.SIGN_IN_SUCCESS, payload: userAuth });
				yield take(types.SIGN_OUT);
			} catch (err) {
				if (authLoopTask) {
					authLoopTask.cancel();
					authLoopTask = null;
				}
				yield put({ type: types.SIGN_IN_FAILURE });
			}
			if (authLoopTask) {
				authLoopTask.cancel();
				authLoopTask = null;
			}
		});
	},

	onSignOutStart: function* () {
		yield takeLatest(types.SIGN_OUT, function* (action) {
			try {
				yield userActions.onSignOutYield();
				yield put({ type: types.SIGN_OUT_SUCCESS });
			} catch (err) {
				yield put(actionsCreator.signInFailure(err));
			}
		});
	},

	onCheckUserSession: function* () {
		yield takeLatest(types.CHECK_USER_SESSION, function* (action) {
			try {
				const userData = yield userActions.checkCurrentSessionYield();
				yield put({ type: types.SIGN_IN_SUCCESS, payload: userData });
			} catch (err) {
				yield put(actionsCreator.signInFailure(err));
			}
		});
	},

	signUpStart: function* () {
		yield takeLatest(types.SIGN_UP_START, function* (action) {
			try {
				const userData = yield userActions.signUpYield(action.payload);
				yield put({ type: types.SIGN_IN_SUCCESS, payload: userData });
			} catch (err) {
				yield put(actionsCreator.signInFailure(err));
			}
		});
	},
};

/* export function* onSignOutStart() {
	yield takeLatest(types.SIGN_OUT, signOut);
}
 */
//export function* signOut() {

/* export function* onCheckUserSession() {
	yield takeLatest(types.CHECK_USER_SESSION, isUserAuthenticated);
} */

//export function* isUserAuthenticated() {

/* 	onGoogleSignInStart: function* () {
		yield takeLatest(types.GOOGLE_SIGN_IN_START, function* (action) {
			try {
				let user = null;

				asdasd;
			} catch (err) {
				yield put(actionsCreator.googleSignInSwitcher(2, err));
			}
		});
	},

	/////////////////////

	onEmailSignInStart: function* () {
		yield takeLatest(types.EMAIL_SIGN_IN_START, function* (action) {
			//export function* SignInWithEmail({ payload: { email, password } }) {

			const {
				payload: { email, password },
			} = action;
			try {
				asdasda;
			} catch (err) {
				yield put(actionsCreator.signInFailure(err));
			}
		});
	},
 */
