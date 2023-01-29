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
    <h3>TALLERES DE ESTIMULACION COGNITIVA</h3>
    <h3>TALLER "APRENDO JUGANDO"</h3>
    <p>
      Es un espacio de Taller grupal, destinado a niños y adolescentes, donde se
      apunta a estimular el aprendizaje, a través del juego creativo,
      favoreciendo la comunicación e interacción entre pares, ya sea oral,
      gestual o verbal, a través de la expresión creativa. Funciona a modo de
      apoyatura pedagógica en pacientes con problemas de aprendizaje, que se
      encuentren con dificultades ya sean vinculares, o por algún tipo de
      retraso cognitivo. Es un espacio que se propone como alternativa al modelo
      clásico de apoyo escolar (clases particulares), el paciente podrá también
      realizar o completar tareas que proponga la escuela o el jardín.
    </p>
    <h3>TALLER DE ORIENTACIÓN VOCACIONAL</h3>
    <p>Dirigido a púberes y adolescentes.</p>
  </>
);

export default Talleres;
