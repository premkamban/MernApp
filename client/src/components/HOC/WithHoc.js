import React from "react";

export const WithHocClass = (WrappedComponent) => {
  return (props) => (
    <div>
      <WrappedComponent {...props} />
    </div>
  );
};

export const WithHocChildren = (props) => {
  return <div>{props.children}</div>;
};
