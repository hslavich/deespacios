import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

import banner from "../../assets/banner.png";
import home from "../../assets/home.png";
import btnChat from "../../assets/btn-chat.png";
import instagram from "../../assets/instagram.png";
import "./index.scss";

const Index = ({ onChatClick }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
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
                    <a
                      className="d-inline-block"
                      href="https://instagram.com/deespacios.centroterapeutico"
                    >
                      <img className="icon" src={instagram} alt="instagram" />
                    </a>
                  </Col>
                </Row>
              </Container>
            </Container>
          </Row>

          <Row>
            <Col lg={6} className="px-0 text-start">
              <div class="img-container">
                <img className="img-fluid" src={home} alt="home" />
                <button class="btn btn-chat" onClick={onChatClick}>
                  <img src={btnChat} alt="chat" />
                </button>
              </div>
            </Col>
            <Col lg={6} className="section-text">
              <h2 className="text-start mb-3">¿Quiénes somos?</h2>
              <p className="text-start">
                <span className="fw-semibold text-violet">DeEspacios</span> nace
                en el 2010, y desde entonces acompañamos a mas de 80 familias.
                La confianza y el trabajo en equipo son lo que nos sostiene
                desde hace mas de 12 años. Buscamos revolucionar la forma de
                trabajar en salud, con la convicción de que se trata de una
                construcción, un proceso relacional y en movimiento.
              </p>
              <p className="text-start">
                Somos un equipo que continúa creciendo profesional y
                humanamente. Aprendemos del trabajo con otros y en el
                intercambio constante.
              </p>
            </Col>
          </Row>
        </Container>
      </>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      </Modal>
    </div>
  );
};

export default Index;
