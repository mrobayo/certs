import React from "react";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import s from "../../shared/localization";
import { fmt } from "../../shared/utils";

// GDPR = General Data Protection Regulation
const cookieConsent = props => {
  const consent = fmt(s.consentPDPP, s.aggrementPDPP);
  return !props.isAccepted ? (
    <div
      className={props.styleEffect + " fixed-bottom alert alert-dark rounded-0"}
      role="alert"
    >
      <div className="p-2 d-flex">
        <div className="p-2 flex-grow-1">
          <p>{consent}</p>
          <hr />
          <p>
            <a href="#">{s.PDPP}</a>
          </p>
        </div>
        <div className="p-2">
          <Button variant="dark" onClick={props.acceptPolicy}>
            {s.acceptLabel}
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

cookieConsent.propTypes = {
  isAccepted: PropTypes.bool,
  acceptPolicy: PropTypes.func,
  styleEffect: PropTypes.string
};

export default cookieConsent;
