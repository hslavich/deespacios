import React from "react";
import "./MyNavbar.scss";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";

const MyNavbar = () => (
  <Navbar bg="white" className="MyNavbar">
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" />
        <img src={logo2} alt="logo2" />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">¿Quiénes somos?</Nav.Link>
        <Nav.Link href="#features">
          ¿Qué es el acompañamiento terapéutico?
        </Nav.Link>
        <Nav.Link href="#pricing">¿Cómo trabajamos?</Nav.Link>
        <Nav.Link href="#pricing">Consultorios externos</Nav.Link>
        <Nav.Link href="#pricing">Talleres</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default MyNavbar;
