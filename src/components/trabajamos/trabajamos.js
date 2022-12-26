import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../shared/title";

import "./trabajamos.scss";

const Trabajamos = () => (
  <>
    <Title text="¿Cómo trabajamos?"></Title>
    <Container>
      <Row>
        <Col className="section-text py-4">{text}</Col>
      </Row>
    </Container>
    <Title text="Donde trabaja un AT?"></Title>
  </>
);

const text = (
  <>
    <p>
      Cuando de Acompañamiento se trata, se toma la admisión de un paciente y el
      equipo coordinador evalúa el tratamiento que necesita esa demanda, el
      abordaje posterior sería el resultado de un tipo de pensamiento
      horizontal, transversal, logrado a través del debate y la reflexión, con
      ideas de intervención construidas entre todos los ATs que forman parte del
      equipo. Dicho espacio de reflexión y de elaboración de estrategias se da
      en el marco de Supervisiones Grupales, separadas por caso, coordinadas por
      quienes dirigen dicho espacio. Las mismas suceden de manera mensual. Cada
      intervención que sugiera alguna modificación del tratamiento, se piensa en
      conjunto con los terapeutas que trabajan con dicho paciente, y
      posteriormente se elevan dichas
    </p>
  </>
);
export default Trabajamos;
