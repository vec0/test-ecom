import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button.component";
import "./sign-in.styles.scss";
import { signInWithGoogle } from "./../../firebase/firebase.utils";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

class SignIn extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(this.props);

    const { email, password } = this.state;

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({ email: "", password: "" });
      this.navigate(this.props.from, { replace: true });

      // window.location.replace(location.state.from.pathname);
    } catch (err) {
      console.log(err);
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in" onSubmit={this.handleSubmit}>
        <h2>I have an account</h2>
        <span>Sign in with your email and password</span>

        <form>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
          />

          <div>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} css="blue" type="submit">
              Sign In With Goggle
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let navigate = useNavigate();
    //let params = useParams();
    return <Component {...props} router={{ navigate }} />;
  }
  return ComponentWithRouterProp;
}

export default withRouter(SignIn);
