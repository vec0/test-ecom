import React from "react";
import SignIn from "../../components/sign-in/sign-in.components";
import "./sign-in-and-sign-up.styles.scss";
import SignUp from "./../../components/sign-up/sign-up.component";

export default function SignInAndSignUpPage({ ...rest }) {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn {...rest} />
      <SignUp {...rest} />
    </div>
  );
}
