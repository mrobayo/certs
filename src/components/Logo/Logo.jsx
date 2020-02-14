import React from "react";
import PropTypes from "prop-types";

import appLogo from "../../assets/images/logo.png";
import classes from "./Logo.module.scss";

const logo = ({ height }) => (
  <div className={classes.Logo} style={{ height: height }}>
    <img src={appLogo} alt="MyBurger" />
  </div>
);

logo.propTypes = {
  height: PropTypes.number
};

export default logo;
