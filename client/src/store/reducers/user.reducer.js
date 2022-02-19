///////////
// TYPES //

import { syncActions } from "./actions-saga/user.actions";

export const types = {
	/* 	GOOGLE_SIGN_IN_START: "user/GOOGLE_SIGN_IN_START",
	EMAIL_SIGN_IN_START: "user/EMAIL_SIGN_IN_START", */
	SIGN_IN_START: "user/SIGN_IN_START",
	SIGN_IN_SUCCESS: "user/SIGN_IN_SUCCESS",
	SIGN_IN_FAILURE: "user/SIGN_IN_FAILURE",
	SIGN_OUT: "user/SIGN_OUT",
	SIGN_OUT_SUCCESS: "user/SIGN_OUT_SUCCESS",
	CHECK_USER_SESSION: "user/CHECK_USER_SESSION",
	SIGN_UP_START: "user/SIGN_UP_START",
};

/////////////
// REDUCER //

const initialState = {
	userCredential: null,
	checkingUerData: false,
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case types.SIGN_UP_START:
		case types.SIGN_IN_START:
			return {
				...state,
				checkingUerData: true,
			};
		case types.SIGN_IN_FAILURE:
			alert(payload);
			return {
				...state,
				error: payload,
				checkingUerData: false,
			};
		case types.SIGN_IN_SUCCESS:
			return {
				...state,
				userCredential: payload,
				checkingUerData: false,
				error: null,
			};
		case types.SIGN_OUT_SUCCESS:
			return {
				...state,
				userCredential: null,
				checkingUerData: false,
				error: null,
			};
		default:
			return state;
	}
}

/////////////////////
// ACTIONS CREATOR //

export const actionsCreator = {
	googleSignInStart: () => {
		return {
			type: types.SIGN_IN_START,
			payload: "GOOGLE",
		};
	},
	emailSignInStart: (email_password) => {
		return {
			type: types.SIGN_IN_START,
			payload: email_password,
		};
	},
	signInSuccess: (token) => ({
		type: types.SIGN_IN_SUCCESS,
		payload: token,
	}),
	signInFailure: (error) => ({
		type: types.SIGN_IN_FAILURE,
		payload: error,
	}),
	signOutStart: () => ({
		type: types.SIGN_OUT,
	}),
	checkUserSessionSync: () => {
		return syncActions.onCheckUserSessionSync();
	},

	/* {
		type: types.CHECK_USER_SESSION,
	} */ signUpStart: (email, password, displayName) => ({
		type: types.SIGN_UP_START,
		payload: { email, password, displayName },
	}),
};
