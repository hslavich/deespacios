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
    <Container>
      <Row>
        <Col className="section-text py-4">
          <ul>
            <li>Domicilio</li>
            <li>En el espacio público</li>
            <li>Instituciones educativas o CETs</li>
            <li>Centros de Día</li>
            <li>Procesos de internación</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </>
);

const text = (
  <>
    <p>
      Si ya tenes la indicacion del profesional, acordamos una entrevista y
      hacemos la admisión. Evaluamos el tratamiento mas conveniente y lo
      presentamos en un plan de objetivos. Presentamos los papeles en la obra
      social, y una vez que se autorice, empezamos a trabajar.
    </p>
    <p>
      Tenemos una planilla de datos, donde podes escribir todo lo que creas
      necesario que sepamos, un consentimiento informado, y un documento donde
      se explica cómo es el mecanismo administrativo para la presentación de la
      documentación, y la facturación mensual.
    </p>
  </>
);
export default Trabajamos;
