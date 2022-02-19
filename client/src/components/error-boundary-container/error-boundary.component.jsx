import React from "react";
import { Component } from "react";
import "./styles.scss";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasErrored: false,
			error: null,
		};
	}
	static getDerivedStateFromError(error) {
		return { hasErrored: true, error: error };
	}

	componentDidCatch(error, info) {
		//console.log(error);
		this.setState(error);
	}

	render() {
		if (this.state.hasErrored) {
			return (
				<div className="_404_">
					<div id="main">
						<div className="fof">
							<h1>Something went wrong</h1>
							{this.state.error.message}
						</div>
					</div>
				</div>
			);

			//	return <div>Something went wrong</div>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
