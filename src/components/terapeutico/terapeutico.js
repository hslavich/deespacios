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
    <Title text="¿En qué casos se solicita un AT?"></Title>
    <Container>
      <Row>
        <Col className="section-text py-4">{textAt}</Col>
      </Row>
    </Container>
  </>
);

const text = (
  <>
    <p>
      Nuestro proyecto se inicia como equipo de{" "}
      <span class="text-decoration-underline">
        Acompañamientos Terapéuticos
      </span>{" "}
      a domicilio. Apuntamos a que la persona pueda desarrollarse y habitar en
      su ámbito cotidiano con la mayor independencia y autonomía posibles,
      generar recursos para realizar actividades sociales, recreativas.
      Desplegar el máximo de su potencial, sea la etapa de vida en la que se
      encuentre. Se trata de ir mas alla del diagnóstico para apostar al
      fortalecimiento de las capacidades de esa persona, habilitando un espacio
      para la expresión de sus deseos.
    </p>
    <p>
      Niños y niñas en jardines y escuelas, adolescentes atravesando las
      conflictivas propias de la edad, adultos necesitando algún tipo de sostén
      emocional, motriz, cognitivo, en rehabilitación, o procesos de
      estereorización.
    </p>
    <p>
      El vínculo con un acompañante, ajeno pero a la vez cercano a lo familiar,
      permite que surjan deseos e inquietudes, miedos y emociones, que se van
      trabajando para darle lugar a nuevos proyectos y nuevos caminos.
    </p>
    <p class="fst-italic">
      Acompañamos, respetando los tiempos de cada persona, de manera cuidada y
      amable.
    </p>
  </>
);

const textAt = (
  <>
    <p>
      Lo debe indicar el profesional de cabecera que guía el tratamiento. Puede
      ser: Pediatra, Neuróloga/o, Psiquiatra, Psicóloga/o, Psicopedagoga/o o
      bien, lo pueden indicar desde la institución educativa: Educación inicial,
      Escuela primaria , secundaria, o la escuela de educación especial.
    </p>
    <p>
      Si nunca te lo indicaron, pero pensas que es necesario, podés conversar
      con el profesional para que lo considere y en ese caso, lo solicite.
    </p>
  </>
);

export default Terapeutico;
