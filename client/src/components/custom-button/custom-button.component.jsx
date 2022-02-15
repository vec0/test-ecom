import React from "react";
import "./custom-button.styles.scss";
export default function CustomButton({ children, css = "", ...rest }) {
  if (css === "inverted") css += " " + "inverted";
  if (css === "blue") css += " " + "blue";

  return (
    <button className={` custom-button ${css} `} {...rest}>
      <span className="icon"></span>
      <span className="buttonText">{children}</span>
    </button>
  );
}

/* <button
      className={`custom-button ${isgooglesignin ? "google-sign-in" : ""} `}
      {...rest}
    >
      <span className="icon"></span>
      <span className="buttonText">{children}</span>
    </button>*/
