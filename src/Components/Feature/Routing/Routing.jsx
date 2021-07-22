import styled from "styled-components";
import React, { useReducer } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Skills from "../../Pages/Skills/Skills";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PortFolio from "../../Pages/Portfolio/Portfolio";
import ContactMe from "../../Pages/ContactMe/ContactMe";
import Home from "../../Pages/Home/Home";
import { MagicContext, ProvaiderTheme } from "../Translate/Translate";
import SideBar from "../SideBar/SideBar";

const initialState = { Theme: false };

const Theme = (state, action) => {
  switch (action.type) {
    case "MagicTheme":
      const newTheme = !state.Theme;
      return { ...state, Theme: newTheme };

    default:
      return state.Theme;
  }
};

export default function Routing() {
  const LanguageComponents = MagicContext();

  const [stateTheme, dispatch] = useReducer(Theme, initialState.Theme);
  const changeColor = () => {
    console.log("hhjgh");
    const action = { type: "MagicTheme" };
    dispatch(action);
  };
  const MainBody = styled.div`
    background-color: ${stateTheme.Theme ? "white" : "black"};
  `;

  return (
    <Router>
      <ProvaiderTheme value={{ stateTheme, dispatch }}>
        <MainBody>
          <Header />
          <SideBar />
          <Switch>
            <Route path="/" exact={true} component={Home}>
              <LanguageComponents.Home />
            </Route>
            <Route path="/PortFolio" exact={true} component={PortFolio}>
              <LanguageComponents.PortFolio />
            </Route>
            <Route path="/Skills" exact={true} component={Skills}>
              <LanguageComponents.Skills />
            </Route>
            <Route path="/ContactMe" exact={true} component={ContactMe}>
              <LanguageComponents.ContactMe />
            </Route>
          </Switch>
          <button style={{ color: stateTheme.Theme }} onClick={changeColor}>
            click
          </button>
          <Footer />
        </MainBody>
      </ProvaiderTheme>
    </Router>
  );
}
