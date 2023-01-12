import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import banner from "../../assets/banner.png";
import home from "../../assets/home.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import "./index.scss";

const Index = () => (
  <div className="Index">
    <>
      <Container fluid className="px-0">
        <Row>
          <img className="banner w-100" src={banner} alt="banner" />
        </Row>

        <Container fluid className="title-container">
          <Container>
            <Row>
              <Col md={6} className="text-md-start">
                <h1 className="title">Espacio Psicológico Integral</h1>
              </Col>
              <Col md={6} className="text-md-end gap-3">
                <a className="d-inline-block" href="https://instagram.com">
                  <img className="icon" src={instagram} alt="instagram" />
                </a>
                <a className="d-inline-block" href="https://instagram.com">
                  <img className="icon" src={facebook} alt="facebook" />
                </a>
              </Col>
            </Row>
          </Container>
        </Container>

        <Row>
          <Col lg={6} className="px-0">
            <img className="img-fluid" src={home} alt="home" />
          </Col>
          <Col className="section-text">
            <h2 className="text-start">¿Quiénes somos?</h2>
            <p className="text-start">
              DeEspacios nace hace 10 años, con un deseo y una convicción: se
              puede pensar la salud como una construccion. teniendo como
              premisa. v como etica. que se trata de un procesc relacional y en
              movimiento.
            </p>
            <p className="text-start">
              La definición de Salud, según la OMS es "Un estado de completo
              bienestar físico, mental y social, y no solamente la ausencia de
              afecciones o enfermedades". Es por eso, que el tratamiento tiene
              como premisa un sujeto integral, en su aspecto biológico, psíquico
              y social, en contexto situacional. Pero además, al pensar la salud
              como un estado, da lugar a la transformación como condición y
              potencia. Se trata entonces de poner en suspenso el diagnóstico
              para apostar al surgimiento o bien, al fortalecimiento de las
              capacidades de esa persona, y habilitando un espacio para la
              expresión de sus deseos.
            </p>
            <p className="text-start">
              Somos un grupo humano que continúa creciendo profesionalmente, en
              constante formación. Aprendemos del trabajo con otros y en el
              intercambio constante.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  </div>
);

export default Index;
