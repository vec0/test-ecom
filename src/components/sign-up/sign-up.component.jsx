import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
import { createUserProfileDocument } from "../../firebase/firebase.utils";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      //  error
      return;
    }
    try {
      //console.log(email, password);
      const auth = getAuth();

      createUserWithEmailAndPassword(auth, email, password)
        // createUserAndRetrieveDataWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          //console.log(userCredential);

          const user = userCredential.user;

          //console.log(user);

          createUserProfileDocument(user, { displayName });
          //console.log(displayName);

          this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          /*auth/email-already-in-use
auth/invalid-email
auth/operation-not-allowed
auth/weak-password*/
          alert(errorCode);

          // ..
        });
      /*  const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ); */
    } catch (err) {
      console.log(err.message);
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    /*  const { displayName, email, password, confirmPassword } = this.state;
    this.setState({ displayName, email, password, confirmPassword }); */
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
            requred="true"
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            requred="true"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            requred="true"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            requred="true"
          />
          <div>
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
