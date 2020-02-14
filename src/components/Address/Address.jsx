import React from "react";
import { Jumbotron } from "react-bootstrap";

import s from ".././../shared/localization";

const address = () => (
  <Jumbotron>
    <p className="text-right ">
      {s.officeAddress} <br />
      {s.officeCity} <br />
      {s.officePhones} <br /> {s.webSiteUrl}
    </p>
  </Jumbotron>
);

export default address;
