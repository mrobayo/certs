import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import Aux from "./hoc/Aiux/Aiux";
import Layout from "./hoc/Layout/Layout";

import Pertenecer from "./containers/Pertenecer/Pertenecer";
import Liquidacion from "./containers/Liquidacion/Liquidacion";

import CookieConsent from "./components/CookieConsent/CookieConsent";
import { useCookies } from "react-cookie";
import * as C from "./shared/constants";
import s from "./shared/localization";
import config from "./config";

function App(props) {
  const [styleEffect, setStyleEffect] = useState("bounceIn");
  const [cookies, setCookie] = useCookies([C.PERSONALDATA_POLICY]);

  useEffect(() => {
    document.title = s.appTitle;
  });

  const acceptPolicyHandler = () => {
    setStyleEffect("bounceOut");
    setTimeout(() => {
      const nextWeek = new Date(
        Date.now() + C.EXPIRES_POLICY * 24 * 60 * 60 * 1000
      );
      setCookie(C.PERSONALDATA_POLICY, C.PERSONALDATA_POLICY, {
        path: "/",
        expires: nextWeek
      });
    }, 1700);
  };

  const routes = (
    <Switch>
      <Route path={C.SERVICETIME_ENDPOINT} exact component={Liquidacion} />
      <Route path={C.BEPART_ENDPOINT} exact component={Pertenecer} />
      <Redirect to="/" />
    </Switch>
  );

  // eslint-disable-next-line react/prop-types
  const showToolbar = props.location.pathname === "/";

  return (
    <Aux>
      <div className="content">
        <Layout showToolbar={showToolbar}>{routes}</Layout>
        <CookieConsent
          styleEffect={styleEffect}
          isAccepted={cookies[C.PERSONALDATA_POLICY] === C.PERSONALDATA_POLICY}
          acceptPolicy={acceptPolicyHandler}
        />
      </div>
      <footer className="sticky-footer p-3">
        {s.officeName} &bull; {s.appTitle} &bull; @{new Date().getFullYear()}{" "}
        {s.organizationName}
        <br />
        {config.env === "development"
          ? "Credits to: " + config.credits
          : config.env}
      </footer>
    </Aux>
  );
}

/*App.propTypes = {

};*/

export default withRouter(App);
