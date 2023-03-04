import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

import banner from "../../assets/banner.png";
import banner2 from "../../assets/banner2.png";
import contacto from "../../assets/contacto.png";
import home from "../../assets/home.png";
import btnChat from "../../assets/btn-chat.png";
import instagram from "../../assets/instagram.png";
import popup from "../../assets/popup.jpg";
import "./index.scss";

const Index = () => {
  const [show, setShow] = useState(true);
  const [toggleOpen] = useOutletContext();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Index">
      <>
        <Carousel variant="dark" fade data-bs-ride="carousel">
          <Carousel.Item>
            <img className="d-block w-100 banner" src={banner2} alt="banner2" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 banner" src={banner} alt="banner" />
          </Carousel.Item>
        </Carousel>
        <Container fluid className="">
          <Row>
            <Container fluid className="title-container">
              <Container>
                <Row>
                  <Col md={6} className="text-md-start">
                    <h1 className="title">Espacio Psicológico Integral</h1>
                  </Col>
                  <Col md={5} className="text-md-end gap-3">
                    <img
                      className="mt-3 img-fluid"
                      src={contacto}
                      alt="contacto"
                    />
                  </Col>
                  <Col md={1} className="text-md-end gap-3">
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
                <button class="btn btn-chat" onClick={toggleOpen}>
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
              <p className="text-start fst-italic">
                Somos un equipo que continúa creciendo profesional y
                humanamente. Aprendemos del trabajo con otros y en el
                intercambio constante.
              </p>
            </Col>
          </Row>
        </Container>
      </>
      <Modal show={show} onHide={handleClose} size="lg" fullscreen="lg-down">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img src={popup} alt="popup" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Index;
