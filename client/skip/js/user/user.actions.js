import UserActionTypes from "./user.types";
export const setCurrentUser = (user) => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user,
});

export const googleSignInSwitcher = (type, payload = null) => {
	if (type === undefined) throw new Error("You Should Choose the Type");
	const res = {};
	/*    console.log(type);
    console.log(typeof type);
    console.log(typeof type === "number");
    console.log(typeof type == "number"); */
	if (typeof type === "number") {
		switch (type) {
			case 0:
				res.type = UserActionTypes.GOOGLE_SIGN_IN_START;
				break;
			case 1:
				res.type = UserActionTypes.GOOGLE_SIGN_IN_SUCCESS;
				break;
			case 2:
				res.type = UserActionTypes.GOOGLE_SIGN_IN_FAILURE;
				break;
			default:
				throw new Error("Type Number Out of Range Exception");
		}
	} else {
		if (UserActionTypes[type] === undefined)
			throw new Error("Type Cast Exception");
		res.type = type;
	}

	res.payload = payload;
	return res;
	/* console.log(type);
  console.log(UserActionTypes[type]); */
};

export const emailSignInStart = (email_password) => {
	return {
		type: UserActionTypes.EMAIL_SIGN_IN_START,
		payload: email_password,
	};
};
export const signInSuccess = (user) => ({
	type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
	payload: user,
});
export const signInFailure = (error) => ({
	type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
	payload: error,
});

export const signOutStartParams = () => ({
	type: UserActionTypes.SIGN_OUT,
});

export const checkUserSession = () => ({
	type: UserActionTypes.CHECK_USER_SESSION,
});

googleSignInSwitcher(UserActionTypes.EMAIL_SIGN_IN_START);
