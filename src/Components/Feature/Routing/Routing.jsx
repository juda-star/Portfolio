import React from "react";
import { Switch, Route } from "react-router-dom";
import Skills from "../../Pages/Skills/Skills";
import PortFolio from "../../Pages/Portfolio/Portfolio";
import ContactMe from "../../Pages/ContactMe/ContactMe";
import Home from "../../Pages/Home/Home";
import { MagicContext } from "../Translate/Translate";
export default function Routing() {
  const LanguageComponents = MagicContext();
  return (
    <>
      <Switch>
        <Route path="/" exact={true} component={Home}>
          <LanguageComponents.Home />
        </Route>
        <Route path="/PortFolio" exact={true} component={PortFolio}>
          <PortFolio />
        </Route>
        <Route path="/Skills" exact={true} component={Skills}>
          <Skills />
        </Route>
        <Route path="/ContactMe" exact={true} component={ContactMe}>
          <ContactMe />
        </Route>
      </Switch>
    </>
  );
}
