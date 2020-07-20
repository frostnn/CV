import React from "react";
import Wrapper from "./containers/wrapper/Wrapper";
import HeaderImg from "./components/HeaderImg/HeaderImg";
import HeaderBoxContainer from "./containers/HeaderBoxContainer/HeaderBoxContainer";

function Main() {
  return ( <
    div className = "Main" >
    <
    HeaderImg / >
    <
    Wrapper >
    <
    HeaderBoxContainer / >
    <
    /Wrapper> <
    /div>
  );
}

export default Main;