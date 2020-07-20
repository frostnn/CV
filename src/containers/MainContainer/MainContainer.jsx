import React from "react";
import "./MainContainer.scss";

const MainContainer = (props) => {
  const { children } = props;
  return <div className="row sticky-parent">{children}</div>;
};
export default MainContainer;
