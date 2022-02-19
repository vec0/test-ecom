import React from "react";
import "./with-spinner.styles.scss";

const WithSpinner = (WrappedComponent) => {
  const spinner = ({
    isCollectionFetching,
    selectIsCollectionLoaded,
    ...otherProps
  }) => {
    return isCollectionFetching || !selectIsCollectionLoaded ? (
      <div className="SpinnerOverlay">
        <div className="SpinnerContainer"></div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return spinner;
};

export default WithSpinner;
