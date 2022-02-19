import React, { Component, useState } from "react";
import FormInput from "../ui-form-input/ui-form-input.component";
import CustomButton from "../ui-button/ui-button.component";
import "./sign-in.styles.scss";
import { useDispatch } from "react-redux";

import { actionsCreator } from "../../store/reducers/user.reducer";

const SignIn = () => {
	const [userCredentials, setCredentials] = useState({
		email: "",
		password: "",
	});
	const { email, password } = userCredentials;
	const dispatch = useDispatch();
	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(actionsCreator.emailSignInStart({ email, password }));
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className="sign-in " onSubmit={handleSubmit}>
			<h2>I have an account</h2>

			<span>Sign in with your google account</span>
			<form>
				<CustomButton
					onClick={() => dispatch(actionsCreator.googleSignInStart())}
					css="blue"
					type="button"
				>
					Sign In With Goggle
				</CustomButton>
			</form>
			<br />
			<span>Sign in with your email and password</span>

			<form>
				<FormInput
					name="email"
					type="email"
					label="Email"
					value={userCredentials.email}
					handleChange={handleChange}
				/>
				<FormInput
					name="password"
					type="password"
					label="Password"
					value={userCredentials.password}
					handleChange={handleChange}
				/>

				<div>
					<CustomButton type="submit">Sign In</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;

//import { signInWithGoogle } from "./../../firebase/firebase.utils";
//import UserActionTypes from "../../store/select/user.types";
//import { emailSignInStart } from "../../store/select/user.actions";

/* function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let navigate = useNavigate();
		//let params = useParams();
		return <Component {...props} router={{ navigate }} />;
	}
	return ComponentWithRouterProp;
}

const mapStateToProps = (state) => ({});

export default withRouter(connect(mapStateToProps, null)(SignIn));
 */
/*  this.props.dispatch({
      type: UserActionTypes.GOOGLE_SIGN_IN_START,
      payl
    }) */
/*  try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({ email: "", password: "" });
      this.navigate(this.props.from, { replace: true });

      // window.location.replace(location.state.from.pathname);
    } catch (err) {
      console.log(err);
    } */

/*

class SignIn2 extends Component {
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
    // console.log(this.props);./

    const { email, password } = this.state;

    this.props.dispatch(emailSignInStart({ email, password }));
  
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
            <CustomButton
              onClick={() =>
                this.props.dispatch({
                  type: UserActionTypes.GOOGLE_SIGN_IN_START,
                })
              }
              css="blue"
              type="button"
            >
              Sign In With Goggle
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
*/
