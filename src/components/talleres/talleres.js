import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../shared/title";

import "./talleres.scss";

const Talleres = () => (
  <>
    <Title text="Talleres"></Title>
    <Container>
      <Row>
        <Col className="section-text py-4">{text}</Col>
      </Row>
    </Container>
  </>
);

const text = (
  <>
    <h3>Taller de juegos para niños y niñas</h3>
    <h3>Taller de danzaterapia para adolescentes y adultos</h3>
    <h3>Taller de estimulación cognitiva para adultos mayores</h3>
    <h3>Talleres grupales de apoyo escolar</h3>
    <p>
      y mucho mas que vas a ir encontrando en nuestro Instagram todos los meses
    </p>
  </>
);

export default Talleres;
