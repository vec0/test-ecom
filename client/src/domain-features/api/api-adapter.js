import { call } from "redux-saga/effects";
import {
	_fetchAllCollectionsYield,
	_fetchSingleCollectionYield,
} from "./firebase/firebase.exports";
import {
	authActions,
	_checkCurrentSessionYield,
} from "./firebase/firebase.utils";

// example: 'collections'
export function* fetchAllCollectionsYield(url) {
	const res = yield _fetchAllCollectionsYield(url);
	return res;
}

// example: 'collections/collectionId'
export function* fetchSingleCollectionYield(url, collectionName) {
	const res = yield _fetchSingleCollectionYield(url, collectionName);
	return res;
}

const auth = {
	storeToken: (token) => {
		localStorage.setItem("token", JSON.stringify(token));
	},
	getStoredToken: () => {
		try {
			return JSON.parse(localStorage.getItem("token"));
		} catch (err) {
			return null;
		}
	},
	/* 	authorize: function* (refresh) {
		// const currentAuth =  yield checkCurrentSessionYield(  );
		const currentAuth = getAuth(app);
		if (!currentAuth) throw Error("token expired");
		yield currentAuth;
	}, */
};

export const userActions = {
	checkCurrentSessionSync: function () {
		return auth.getStoredToken();
		//return _checkCurrentSessionYield();
	},

	onEmailSignInYield: function* (data) {
		const res = (yield authActions.emailSigninYield(data))?.user;
		auth.storeToken(res);
		return res;
	},

	onGoogleSignInYield: function* () {
		const res = yield authActions.googleSigninYield();
		auth.storeToken(res);
		return res;
	},

	onSignOutYield: function* () {
		const res = yield authActions.signOutUserYield();
		auth.storeToken(null);
		return res;
	},

	signUpYield: function* (data) {
		const res = yield authActions.signUpYield(data);
		auth.storeToken(res);
		return res;
	},
};
