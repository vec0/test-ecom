import React from "react";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CustomButton({ children, css = "", ...rest }) {
	if (css === "") {
		return (
			<button className={`w-100 ui-button ${css} `} {...rest}>
				<div className="row">
					<span className="buttonText">{children}</span>
				</div>
			</button>
		);
	}

	return (
		<button className={`  blue2 w-100`} {...rest}>
			<div className="row ">
				<span className="icon"></span>
			</div>
			<div className="row w-100">
				<span className=" w-100 buttonText">{children}</span>
			</div>
		</button>
	);
}

/* <button
      className={`ui-button ${isgooglesignin ? "google-sign-in" : ""} `}
      {...rest}
    >
      <span className="icon"></span>
      <span className="buttonText">{children}</span>
    </button>*/
