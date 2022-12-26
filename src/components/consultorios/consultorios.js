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
  <>
    <p>
      Actualmente nos encontramos en un nuevo espacio físico, recientemente
      inaugurado, donde llevamos adelante la supervisión de 30 casos de
      Acompañamiento Terapéutico (distribuidos en CABA, Zona Sur y ampliando
      recientemente a Zona Norte) Nuestro Centro funciona como un Espacio
      Psicológico Integral donde trabajamos desde diferentes disciplinas y
      abordamos múltiples problemáticas. Los otros tipos de tratamientos que
      ofrecemos son: TERAPIA PSICOLÓGICA INDIVIDUAL Dirigido a niños,
      adolescentes y adultos. La posibilidad de un espacio individual, de
      escucha, de respeto y reflexión, permite dar lugar a la tramitación de
      angustias, ansiedades, miedos, e inhibiciones. Teniendo como faro, el
      deseo del Sujeto. Se trata que por medio de la palabra, en el espacio con
      el otro, emerja algo de la subjetividad del paciente, generando un cierto
      bienestar psíquico. ESPACIO TERAPIA GRUPAL Es un espacio de Taller
      quincenal donde de manera grupal se abordar las problemáticas referidas a
      convivir con un familiar con CUD. Se hará lazo a través de dichas
      problemáticas, funcionando la terapéutica grupal en tanto identificaciones
      con otros. Es esperable que las familias se sientan solas al momento de
      escuchar varias indicaciones de tratamientos o aspectos a abordar.
    </p>
  </>
);

export default Consultorios;
