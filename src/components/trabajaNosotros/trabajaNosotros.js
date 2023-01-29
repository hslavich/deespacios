import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../shared/title";

import "./trabajaNosotros.scss";

const TrabajaNosotros = () => (
  <>
    <Title text="Trabaja con nosotras"></Title>
    <Container>
      <Row className="justify-content-center">
        <Col xs={6} className="section-text py-4">
          {text}
        </Col>
      </Row>
    </Container>
  </>
);

const text = (
  <>
    <p>
      Te invitamos a que nos envíes tu CV con Nombre, Apellido y Profesión al
      siguiente mail contándonos tu búsqueda y objetivos.
    </p>
    <h3>deespacios@gmail.com</h3>
    <p>Gracias!</p>
  </>
);

export default TrabajaNosotros;
