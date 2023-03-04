import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../shared/title";

import "./somos.scss";

import directoras from "../../assets/directoras.png";
import logo from "../../assets/logo.png";
import Equipo from "../../assets/equipo/index";

const Somos = () => (
  <>
    <Title text="¿Quiénes somos?"></Title>
    <Container>
      <Row>
        <Col className="py-4 section-text">{text}</Col>
        <Col md={4}>
          <img
            className="img-directoras img-fluid"
            src={directoras}
            alt="directoras"
          ></img>
          <ul class="nombres">
            <li>Lic. Nuria Carolina Gimenez </li>
            <li>Lic. Virginia Zienka Hogan</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={Equipo.Equipo1} alt="equipo1"></img>
        </Col>
        <Col>
          <img src={Equipo.Equipo2} alt="equipo2"></img>
        </Col>
        <Col>
          <img src={Equipo.Equipo3} alt="equipo3"></img>
        </Col>
        <Col>
          <img src={Equipo.Equipo4} alt="equipo4"></img>
        </Col>
        <Col>
          <img src={Equipo.Equipo5} alt="equipo5"></img>
        </Col>
        <Col>
          <img src={Equipo.Equipo6} alt="equipo6"></img>
        </Col>
        <Col>
          <img src={Equipo.Equipo7} alt="equipo7"></img>
        </Col>
      </Row>
    </Container>
  </>
);

const text = (
  <>
    <p>
      Nos conocimos en la facultad, alla por el año 2002. Trabajamos como
      acompañantes terapéuticas para los mismos equipos, en el ámbito público y
      privado, y empezamos a darle cuerpo a una idea: el acompañamiento
      terapéutico es mucho mas que un sostén domiciliario, es la posibilidad de
      abrir espacios que se creían imposibles. Prestar voz y ofrecer recursos a
      la fuerza del deseo de cambiar, de superarse.
    </p>
    <blockquote>
      La limitación no es de la persona, la limitación es el resultado de las
      barreras que nos pone el mundo.
    </blockquote>
    <p>
      Empezamos a coordinar tratamientos de acompañamientos en el 2010, de a
      poquito fuimos creciendo, e incorporamos a Eli como coordinadora
      terapéutica. Luego sumamos una orientadora psicopedagógica, y a los
      referentes en los tratamientos.
    </p>
    <p>
      Encontramos un lugar, que es como nuestra casa. Alli nos reunimos en
      equipo, y al tiempo, decidimos abrir la atención en consultorios externos:
      psicología, psicopedagogía, musicoterapia, y el espacio de talleres y
      recreación, abiertos a la comunidad, como lugar de intercambio e
      inclusión.
    </p>
    <p>
      Este equipo sigue creciendo, y nos sentimos honradas de poder acompañar a
      tantas familias, que ponen su confianza en nosotras.
    </p>
    <div class="mx-auto text-center">
      <img src={logo} alt="logo"></img>
    </div>
  </>
);

export default Somos;
