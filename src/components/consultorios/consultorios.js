import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../shared/title";

import "./consultorios.scss";

const Consultorios = () => (
  <>
    <Title text="Consutorios externos"></Title>
    <Container>
      <Row>
        <Col className="section-text py-4">{text}</Col>
      </Row>
    </Container>
  </>
);

const text = (
  <ol>
    <li>
      Terapia Psicológica Individual: dirigido a niños, adolescentes y adultos
    </li>
    <li>Psicopedagogía</li>
    <li>Orientación a Padres y Madres. Individual o grupal</li>
  </ol>
);

export default Consultorios;
