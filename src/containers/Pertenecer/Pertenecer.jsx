import React, { Component } from "react";
import { Card, Form } from "react-bootstrap";

import Aux from "../../hoc/Aiux/Aiux";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";
import jCaptcha from "js-captcha/dist/js/jCaptcha";

class pertenecer extends Component {
  componentDidMount() {
    var myc = new jCaptcha({
      callback: (response, $captchaInputElement) => {
        console.log("jq", response);
        console.log("ju", $captchaInputElement);
      }
    });
    console.log(myc);
  }

  render() {
    return (
      <Aux>
        <GoogleReCaptcha
          action="bepart"
          onVerify={token => console.log(token)}
        />
        <section>
          <h3>Consulta de Certificado de Pertenecer o No a Fuerzas Armadas</h3>
          <article>
            <Card>
              <Card.Header>
                Ingrese su cédula de identidad para consultar el Certificado:
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Cédula: </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Cédula de Identidad"
                    />
                    <Form.Text className="text-muted">ID</Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Texto de Seguridad:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese el texto en la imagen"
                    />
                    <Form.Text className="text-muted">Texto </Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el texto en la imagen"
                      className="jCaptcha"
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </article>
        </section>
      </Aux>
    );
  }
}

export default pertenecer;
