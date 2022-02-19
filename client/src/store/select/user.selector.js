import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
	[selectUser],
	(user) =>
		//user.userCredential ? user.userCredential.user : null
		user.userCredential
);

export const selectCheckingUserData = createSelector(
	[selectUser],
	(user) =>
		//user.userCredential ? user.userCredential.user : null
		user.checkingUerData
);
