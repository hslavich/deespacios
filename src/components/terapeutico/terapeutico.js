import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../shared/title";

import "./terapeutico.scss";

const Terapeutico = () => (
  <>
    <Title text="¿Qué es el acompañamiento terapéutico?"></Title>
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
      Nuestro proyecto se inicia como equipo de Acompañamientos Terapéuticos a
      domicilio.
    </p>
    <p>
      El mismo se sostiene en los conceptos de salud y sujeto ya mencionados, en
      principio a los fines de plantearse como un dispositivo alternativo a la
      internación psiquiátrica, brindándole además, como un espacio contenedor
      en familias con algún integrante con CUD. Se buscará que el paciente, ya
      en tratamiento Psicológico o Psiquiátrico, pueda habitar en su ámbito
      diario de manera socialmente adaptada. A fin de poder convivir en su seno
      familiar, facilitando recursos y herramientas para sostener de manera
      autónoma, las actividades de la vida diaria y hábitos de higiene. Incluso
      en pacientes con tratamiento farmacológico, el AT puede acompañar en la
      administración y ser garante y evaluador en el proceso de toma de
      medicación.
    </p>
    <p>
      Por otro lado, trabajar en intercambio con los distintos espacios
      terapéuticos por los que circule.
    </p>
    <p>
      La figura de un acompañante, ajeno y a la vez cercano a lo familiar, en un
      vínculo de confianza y contención, habilita la emergencia de deseos e
      inquietudes, al mismo tiempo que sostiene para el tratamiento de emociones
      y afectos de manera cuidada y amable.
    </p>
  </>
);

export default Terapeutico;
