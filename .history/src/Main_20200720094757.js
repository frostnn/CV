import React from "react";
import Wrapper from "./containers/wrapper/Wrapper";
import HeaderImg from "./components/HeaderImg/HeaderImg";
import HeaderBoxContainer from "./containers/HeaderBoxContainer/HeaderBoxContainer";
import MainContainer from "./containers/MainContainer/MainContainer";
import AsideNavContainer from './containers/AsideNavContainer/AsideNavContainer'
function Main() {
  return (
    <div className="Main">
      <HeaderImg />
      <Wrapper>
        <HeaderBoxContainer />
        <MainContainer>
          <AsideNavContainer/>
        </MainContainer>
      </Wrapper>
    </div>
  );
}

export default Main;
