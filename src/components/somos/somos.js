import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../shared/title";

import "./somos.scss";

import directoras from "../../assets/directoras.png";

const Somos = () => (
  <>
    <Title text="¿Quiénes somos?"></Title>
    <Container>
      <Row>
        <Col className="py-4 section-text">{text}</Col>
        <Col md={4}>
          <img className="img-fluid" src={directoras} alt="directoras"></img>
        </Col>
      </Row>
    </Container>
  </>
);

const text = (
  <>
    <p>
      DeEspacios nace hace 10 años, con un deseo y una convicción: se puede
      pensar la salud como una construcción, teniendo como premisa, y como
      ética, que se trata de un proceso relacional y en movimiento.
    </p>
    <p>
      La definición de Salud, según la OMS es "Un estado de completo bienestar
      físico, mental y social, y no solamente la ausencia de afecciones o
      enfermedades". Es por eso, que el tratamiento tiene como premisa un sujeto
      integral, en su aspecto biológico, psíquico y social, en contexto
      situacional. Pero además, al pensar la salud como un estado, da lugar a la
      transformación como condición y potencia. Se trata entonces de poner en
      suspenso el diagnóstico para apostar al surgimiento o bien, al
      fortalecimiento de las capacidades de esa persona, y habilitando un
      espacio para la expresión de sus deseos.
    </p>
    <p>
      Somos un grupo humano que continúa creciendo profesionalmente, en
      constante formación. Aprendemos del trabajo con otros y en el intercambio
      constante.
    </p>
  </>
);

export default Somos;
