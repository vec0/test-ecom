import { takeLatest, put, all, call, delay } from "redux-saga/effects";
import {
	auth,
	googleProvider,
	createUserProfileDocument,
	signInWithGoogle as signInWithGoogleFireBase,
	authGetMethod,
	signOutUser,
	getCurrentUser,
} from "../../firebase/firebase.utils";
import UserActionTypes from "./user.types";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import {
	signInFailure,
	googleSignInSwitcher,
	signInSuccess,
} from "./user.actions";
import { PMS, ASC } from "../saga-utils";
import { onClearCart } from "../cart/cart.saga";

/////////////////////

export function* writeSnapshopFromCurrentUserAuth(user) {
	// COPY
	let userSnapshop = null;
	let data = yield ASC(() => createUserProfileDocument(user));
	yield PMS((d) => (userSnapshop = d), onSnapshot, data);
	yield put(signInSuccess({ id: userSnapshop.id, ...userSnapshop.data() }));
	// COPY
}

/////////////////////

export function* onGoogleSignInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithGoogle() {
	try {
		let user = null;

		yield PMS((data) => (user = data), signInWithGoogleFireBase);
		yield writeSnapshopFromCurrentUserAuth(user);
	} catch (err) {
		yield put(googleSignInSwitcher(2, err));
	}
}

/////////////////////

export function* onEmailSignInStart() {
	yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, SignInWithEmail);
}

export function* SignInWithEmail({ payload: { email, password } }) {
	try {
		let userSnapshop = null;
		const auth = yield authGetMethod();

		//console.log("AUTH >>>");
		////console.log(auth);
		//console.log(email, password);
		const { user } = yield signInWithEmailAndPassword(auth, email, password);
		//console.log(tempData);
		/*     this.setState({ email: "", password: "" });
    this.navigate(this.props.from, { replace: true });

    yield put(signInSuccess(userSnapshop.data)); */

		yield writeSnapshopFromCurrentUserAuth(user);
	} catch (err) {
		yield put(signInFailure(err));
	}
}

/////////////////////////////

export function* onSignOutStart() {
	yield takeLatest(UserActionTypes.SIGN_OUT, signOut);
}

export function* signOut() {
	try {
		yield signOutUser();
		yield put({ type: UserActionTypes.SIGN_OUT_SUCCESS });
	} catch (err) {
		yield put(signInFailure(err));
	}
}

/////////////////////////////

export function* onCheckUserSession() {
	yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield writeSnapshopFromCurrentUserAuth(userAuth);
	} catch (err) {
		yield put(signInFailure(err));
	}
}

/////////////////////
/////////////////////
/////////////////////

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onCheckUserSession),
		call(onSignOutStart),
		call(onClearCart),
	]);
}
