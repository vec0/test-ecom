import React from "react";
import "./styles.scss";
export default function FormInput({ handleChange, label, ...rest }) {
	return (
		<div className="group">
			<input className="form-input" onChange={handleChange} {...rest}></input>
			{label ? (
				<label
					className={`${
						rest.value.length > 0 ? "shrink" : ""
					} form-input-label`}
				>
					{label}
				</label>
			) : null}
		</div>
	);
}
