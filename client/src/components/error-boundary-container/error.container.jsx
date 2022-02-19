import React from "react";
import { Component } from "react";
import "./styles.scss";

class ErrorContiner extends Component {
	render() {
		return (
			<div className="_404_">
				<div id="main">
					<div className="fof">
						<h1>Something went wrong</h1>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

export default ErrorContiner;
