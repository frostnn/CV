import React from "react";
import "./Wrapper.scss";

const Wrapper = (props) => {
  const { children } = props;
  return <div className="container gutter-top">{children}</div>;
};
export default Wrapper;
