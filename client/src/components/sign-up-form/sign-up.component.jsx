import React, { Component } from "react";
import { actionsCreator } from "../../store/reducers/user.reducer";
import CustomButton from "../ui-button/ui-button.component";
import FormInput from "../ui-form-input/ui-form-input.component";
import "./sign-up.styles.scss";
import { connect } from "react-redux";

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
			this.props.dispatch(
				actionsCreator.signUpStart(email, password, displayName)
			);
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
			<div className="sign-up ">
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(null)(SignUp);
