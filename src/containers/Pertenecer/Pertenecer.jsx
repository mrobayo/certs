import React from "react";
import { Card, Form } from "react-bootstrap";

import Aux from "../../hoc/Aiux/Aiux";

const pertenecer = () => (
  <Aux>
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
                <Form.Control type="email" placeholder="Cédula de Identidad" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Texto de Seguridad:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese el texto en la imagen"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </article>
    </section>
  </Aux>
);

export default pertenecer;
