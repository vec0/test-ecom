// example: 'collections'

/* 
export function* authorizeYield() {
	let token;
	while (true) {
		token = yield call(authService, token);
		yield call(setAuthToken, token);
		yield put(authSuccess, token);
		yield call(delay, token.expires_in);
	}
} */

/* const userAuth = yield getCurrentUser();
if (!userAuth) return;
yield writeSnapshopFromCurrentUserAuth(userAuth); */

/* function* authorize(refresh) {
	try {
		const token = yield call(auth.authorize, refresh);
		yield call(auth.storeToken, token);
		yield put(actionsCreator.signInSuccess(token));
		return token;
	} catch (e) {
		yield call(auth.storeToken, null);
		yield put(actionsCreator.signInFailure(e));
		return null;
	}
}

function* authorizeLoop(token) {
	try {
		while (true) {
			const refresh = token != null;
			token = yield call(authorize, refresh);
			if (token == null) return;

			yield call(delay, token.expires_in);
		}
	} catch (e) {
		if (e instanceof InterruptedError) return;

		throw e;
	}
}

function* authentication() {
	const storedToken = yield call(auth.getStoredToken);

	while (true) {
		if (!storedToken) yield take(types.SIGN_IN_START);

		const authLoopTask = yield fork(authorizeLoop, storedToken);

		const { signOutAction } = yield race({
			signOutAction: take(SIGN_OUT),
			authLoop: join(authLoopTask),
		});

		if (signOutAction) {
			authLoopTask.cancel(new InterruptedError(SIGN_OUT));
			yield call(auth.storeToken, null);
		}
	}
}
 */
