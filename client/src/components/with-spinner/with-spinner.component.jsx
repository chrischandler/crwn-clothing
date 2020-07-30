import React from "react";
import SpinnerComponent from "../spinner/spinner.component";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerComponent />
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
