import React, { Children } from "react";
import "./with-spinner.styles.scss";

const SpinnerContainer = (props) => {
	return (
		<div className="SpinnerOverlay">
			<div className="row">
				<div className="col  ">
					<div className="row mb-5  justify-content-center">
						{" "}
						{props.children}
					</div>
					<div className="row mb-5 justify-content-center">
						<div className=" SpinnerContainer "></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SpinnerContainer;
