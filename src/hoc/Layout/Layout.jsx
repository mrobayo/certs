import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

import Aux from "../Aiux/Aiux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

import classes from "./Layout.module.scss";
import Address from "../../components/Address/Address";
import Sidebar from "../../components/Navigation/Sidebar/Sidebar";

class Layout extends Component {
  render() {
    const { showToolbar } = this.props;
    return (
      <Aux>
        <Toolbar isVisible={showToolbar} />
        <Sidebar isOpen={false} />

        <Container fluid={true}>
          <main className={classes.Content}>{this.props.children}</main>
          <footer>
            <Address />
          </footer>
        </Container>
      </Aux>
    );
  }
}
Layout.propTypes = {
  showToolbar: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Layout;
