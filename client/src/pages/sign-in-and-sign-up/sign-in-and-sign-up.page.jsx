import React from "react";
import SignIn from "../../components/sign-in-form/sign-in.component";
import SignUp from "../../components/sign-up-form/sign-up.component";
import "./styles.scss";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
	selectCheckingUserData,
	selectCurrentUser,
} from "../../store/select/user.selector";
import SpinnerContainer from "../../components/spinner/with-spinner-no-redux.components";

export default function SignInAndSignUpPage({ ...rest }) {
	const checkingUserData = useSelector(selectCheckingUserData);
	const currentUser = useSelector(selectCurrentUser);
	const location = useLocation();
	const navigate = useNavigate();
	if (checkingUserData) {
		return <SpinnerContainer> Checking User Data... </SpinnerContainer>;
	}
	/* 	console.log(location);
	if (currentUser) {
		
		return <Navigate to="/" replace="true"></Navigate>;
	} */
	return (
		<div className="sign-in-and-sign-up">
			<SignIn {...rest} />
			<SignUp {...rest} />
		</div>
	);
}
