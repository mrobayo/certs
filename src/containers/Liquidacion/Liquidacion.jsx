import React from "react";
import { Card } from "react-bootstrap";
import Aux from "../../hoc/Aiux/Aiux";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";

const liquidacion = () => (
  <Aux>
    <GoogleReCaptcha
      action="serviceTime"
      onVerify={token => console.log(token)}
    />
    <section>
      <h3>Consulta de Liquidación de Tiempo de Servicio</h3>
      <article>
        <Card>
          <Card.Header>
            Ingrese su cédula de identidad para consultar el Certificado:
          </Card.Header>
          <Card.Body>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </article>
    </section>
  </Aux>
);

export default liquidacion;
