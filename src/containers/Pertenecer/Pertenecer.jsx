import React, { Component } from "react";
import PropTypes from "prop-types";

import { Card, Form, Button, Toast } from "react-bootstrap";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";
import jCaptcha from "js-captcha/dist/js/jCaptcha";
import Octicon, { Info, Search } from "@primer/octicons-react";
import MaskInput from "react-maskinput";

import classes from "./Pertenecer.module.scss";
import s from "../../shared/localization";
import Aux from "../../hoc/Aiux/Aiux";
import config from "../../config";
import fingerImage from "../../assets/images/finger-hint.jpg";

class BePartCertificate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mycaptcha: null,
      showInfo: false,
      submitEnabled: false,
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
        } else if (response === "error") {
          $captchaInputElement[0].classList.remove("success");
          $captchaInputElement[0].classList.add("error");
          $captchaInputElement[0].placeholder = "Please try again!";
        }
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
  };

  toggleShowInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  bePartForm = () => {
    return (
      <Form onSubmit={this.submitHandler}>
        <div className="row">
          <div className="col-md-9 col-sm-12 col-lg-8">
            <div className="row">
              <Form.Group controlId="formId" className="col-md-6 col-sm-12">
                <Form.Label>{s.bePart.idlabel}:</Form.Label>
                <MaskInput
                  alwaysShowMask={false}
                  maskChar=" "
                  mask="0000000000"
                  size={10}
                  className="form-control"
                  placeholder={s.bePart.idplaceholder}
                />
                <Form.Text className="text-muted">{s.bePart.idhint}</Form.Text>
              </Form.Group>

              <Form.Group controlId="formCode" className="col-md-6 col-sm-12">
                <Form.Label>
                  {s.bePart.fingerlabel}:{" "}
                  <a onClick={this.toggleShowInfo}>
                    <Octicon
                      icon={Info}
                      ariaLabel="Info"
                      className="text-info"
                    />
                  </a>
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder={s.bePart.fingerplaceholder}
                    maxLength={12}
                />
                <Form.Text className="text-muted">
                  {s.bePart.fingerhint}
                </Form.Text>
              </Form.Group>
            </div>

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
            <Form.Text className="text-muted">{s.bePart.sechint}</Form.Text>
          </div>
          <div className="col-md-3 col-sm-12 col-lg-4 text-right">
            <Button type="submit" variant={this.state.submitEnabled ? "primary" : "secondary"} size="lg" disabled={!this.state.submitEnabled}>
              <Octicon icon={Search} ariaLabel="Ingresar" /> {s.bePart.action}
            </Button>
          </div>
        </div>
      </Form>
    );
  };

  render() {
    const toast = (
      <div aria-live="polite" aria-atomic="true" className={classes.toastWrap}>
        <Toast
          show={this.state.showInfo}
          onClose={this.toggleShowInfo}
          className={classes.toast}
        >
          <Toast.Header>
            <strong className="mr-auto">s.bePart.fingerlabel</strong>
            <small></small>
          </Toast.Header>
          <Toast.Body>
            <img src={fingerImage} class="rounded img-fluid img-thumbnail" />
          </Toast.Body>
        </Toast>
      </div>
    );

    return (
      <Aux>
        <GoogleReCaptcha
          action="bepart"
          onVerify={token => console.log(token)}
        />
        <section className="container-sm">
          <h4 className={classes.title}>{s.bePart.title}</h4>
          <article>
            <Card>
              <Card.Header>{s.bePart.leyend}</Card.Header>
              <Card.Body>{this.bePartForm()}</Card.Body>
            </Card>
          </article>
          {this.state.showInfo ? toast : null}
        </section>
      </Aux>
    );
  }
}

BePartCertificate.propTypes = {
  //submitHandler: PropTypes.string
};

export default BePartCertificate;
