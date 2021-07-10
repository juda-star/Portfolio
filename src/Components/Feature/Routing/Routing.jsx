import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Skills from "../../Pages/Skills/Skills";
import PortFolio from "../../Pages/Portfolio/Portfolio";
import ContactMe from "../../Pages/ContactMe/ContactMe";
import Home from "../../Pages/Home/Home";
import { MagicContext } from "../Translate/Translate";
import SideBar from "../SideBar/SideBar";
export default function Routing() {
  const LanguageComponents = MagicContext();
  return (
    <Router>
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
    </Router>
  );
}
