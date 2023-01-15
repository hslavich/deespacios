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
      <Container fluid className="">
        <Row>
          <img className="banner" src={banner} alt="banner" />

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
        </Row>

        <Row>
          <Col lg={6} className="px-0">
            <img className="img-fluid" src={home} alt="home" />
          </Col>
          <Col lg={6} className="section-text">
            <h2 className="text-start mb-3">¿Quiénes somos?</h2>
            <p className="text-start">
              <span className="fw-semibold text-violet">DeEspacios</span> nace
              en el 2010, y desde entonces acompañamos a mas de 80 familias. La
              confianza y el trabajo en equipo son lo que nos sostiene desde
              hace mas de 12 años. Buscamos revolucionar la forma de trabajar en
              salud, con la convicción de que se trata de una construcción, un
              proceso relacional y en movimiento.
            </p>
            <p className="text-start">
              Somos un equipo que continúa creciendo profesional y humanamente.
              Aprendemos del trabajo con otros y en el intercambio constante.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  </div>
);

export default Index;
