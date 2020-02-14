import React from "react";
import PropTypes from "prop-types";

import Logo from "../../Logo/Logo";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Octicon, { SignIn } from "@primer/octicons-react";
import classes from "./Toolbar.module.scss";
import s from "../../../shared/localization";
import * as C from "../../../shared/constants";

const toolbar = ({ isVisible }) =>
  isVisible ? (
    <header className={classes.Toolbar}>
      <Navbar bg="light" expand="sm" fixed="top">
        <Navbar.Brand className={classes.Logo} href="#home">
          <Logo />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="app-navbar-nav" />

        <Navbar.Collapse id="app-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link>{s.appTitle}</Nav.Link>
            </Nav.Item>

            <NavDropdown
              title={s.onlineCertificates}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href={C.BEPART_ENDPOINT}>
                {s.belongingCertificate}
              </NavDropdown.Item>
              <NavDropdown.Item href={C.SERVICETIME_ENDPOINT}>
                {s.timeInServiceCertificate}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-sm-2">
            <Nav.Item>
              <Nav.Link href={C.ADMIN_ENDPOINT}>
                <Octicon icon={SignIn} ariaLabel="Ingresar" />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  ) : null;

toolbar.propTypes = {
  isVisible: PropTypes.bool
};
export default toolbar;
