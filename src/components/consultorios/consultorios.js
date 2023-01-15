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
    <li>Musicoterapia</li>
    <li>Orientación a Padres y Madres. Individual o grupal</li>
    <li>Psiquiatría: Dirigido a adolescentes y adultos</li>
    <li>
      Talleres grupales: para niños y niñas, adolescentes y adultos. De juego.
      De musica. De estimulación cognitiva. (Ver mas detalles en sección
      novedades).
    </li>
    <li>
      Taller de Orientación Vocacional: Grupal. Virtual. Dirigido a púberes y
      adolescentes.
    </li>
  </ol>
);

export default Consultorios;
