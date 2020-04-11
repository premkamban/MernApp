import React from "react";

export const WithHocClass = (WrappedComponent) => {
  return (props) => (
    <div>
      <WrappedComponent {...props} />
    </div>
  );
};

export const Aux = (props) => props.children;
