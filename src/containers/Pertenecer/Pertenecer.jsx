import React, { Component } from "react";
import PropTypes from "prop-types";

import { Card, Form, Button } from "react-bootstrap";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";
import jCaptcha from "js-captcha/dist/js/jCaptcha";
import Octicon, { Search } from "@primer/octicons-react";
import MaskInput from "react-maskinput";

import classes from "./Pertenecer.module.scss";
import s from "../../shared/localization";
import Aux from "../../hoc/Aiux/Aiux";
import config from "../../config";

class BePartCertificate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mycaptcha: null,
      lang: config.lang
    };
  }

  componentDidMount() {
    const mycaptcha = new jCaptcha({
      callback: (response, $captchaInputElement) => {
        if (response === "success") {
          $captchaInputElement[0].classList.remove("error");
          $captchaInputElement[0].classList.add("success");
          $captchaInputElement[0].placeholder = "Submit successful!";
        }

        if (response === "error") {
          $captchaInputElement[0].classList.remove("success");
          $captchaInputElement[0].classList.add("error");
          $captchaInputElement[0].placeholder = "Please try again!";
        }

        console.log("jq", response);
      },
      requiredValue: "=",
      canvasWidth: "100",
      canvasHeight: "16",
      canvasFontSize: "15px",
      canvasFillStyle: "#878f99"
    });
    this.setState({ mycaptcha: mycaptcha });
    s.setLanguage(this.state.lang);
  }

  submitHandler = event => {
    event.preventDefault();
    this.state.mycaptcha.validate();
    alert("submit");
  };

  render() {
    return (
      <Aux>
        <GoogleReCaptcha
          action="bepart"
          onVerify={token => console.log(token)}
        />
        <section className="container-sm">
          <h4 className={classes.title}>
            {s.bePart.title}
          </h4>
          <article>
            <Card>
              <Card.Header>
                {s.bePart.leyend}
              </Card.Header>
              <Card.Body>
                <Form onSubmit={this.submitHandler}>
                  <div className="row">
                    <div className="col-md-9 col-sm-12 col-lg-8">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>{s.bePart.idlabel}: </Form.Label>
                        <MaskInput
                          alwaysShowMask={false}
                          maskChar=" "
                          mask="0000000000"
                          size={10}
                          className="form-control"
                          placeholder={s.bePart.idplaceholder}
                        />
                        <Form.Text className="text-muted">
                          {s.bePart.idhint}
                        </Form.Text>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>{s.bePart.seclabel}:</Form.Label>
                        <br />
                        <Form.Control
                          type="number"
                          placeholder={s.bePart.secplaceholder}
                          className="jCaptcha"
                          min={0}
                          max={9999}
                          maxLength={4}
                        />
                      </Form.Group>
                      <Form.Text className="text-muted">
                        {s.bePart.sechint}
                      </Form.Text>
                    </div>
                    <div className="col-md-3 col-sm-12 col-lg-4 text-right">
                      <Button type="submit">
                        <Octicon icon={Search} ariaLabel="Ingresar" /> {s.bePart.action}
                      </Button>
                    </div>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </article>
        </section>
      </Aux>
    );
  }
}

BePartCertificate.propTypes = {
  //submitHandler: PropTypes.string
};

export default BePartCertificate;
