import React from "react";
import "./myNavbar.scss";

import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";

const MyNavbar = () => (
  <Navbar bg="white" className="MyNavbar">
    <Container>
      <Navbar.Brand href="/">
        <img height={58} src={logo} alt="logo" />
        <img className="ms-2" height={52} src={logo2} alt="logo2" />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Link to="quienes-somos" className="nav-link">
          ¿Quiénes somos?
        </Link>
        <Link to="acompañamiento-terapeutico" className="nav-link">
          ¿Qué es el acompañamiento terapéutico?
        </Link>
        <Link to="como-trabajamos" className="nav-link">
          ¿Cómo trabajamos?
        </Link>
        <Link to="consultorios-externos" className="nav-link">
          Consultorios externos
        </Link>
        <Link to="talleres" className="nav-link">
          Talleres
        </Link>
      </Nav>
    </Container>
  </Navbar>
);

export default MyNavbar;
