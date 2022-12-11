import React from "react";
import PropTypes from "prop-types";
import "./Index.scss";

import MyNavbar from "../shared/MyNavbar";
import banner from "../../assets/banner.png";
import home from "../../assets/home.png";

const Index = () => (
  <div className="Index">
    <MyNavbar />
    <img className="img-fluid" src={banner} alt="banner" />
    <div className="title-container">
      <h1 className="title">Espacio Psicológico Integral</h1>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 ps-0">
          <img className="img-fluid" src={home} alt="home" />
        </div>
        <div className="col-6 section-text">
          <h2 className="text-start">¿Quiénes somos?</h2>
          <p className="text-start">
            DeEspacios nace hace 10 años, con un deseo y una convicción: se
            puede pensar la salud como una construccion. teniendo como premisa.
            v como etica. que se trata de un procesc relacional y en movimiento.
          </p>
          <p className="text-start">
            La definición de Salud, según la OMS es "Un estado de completo
            bienestar físico, mental y social, y no solamente la ausencia de
            afecciones o enfermedades". Es por eso, que el tratamiento tiene
            como premisa un sujeto integral, en su aspecto biológico, psíquico y
            social, en contexto situacional. Pero además, al pensar la salud
            como un estado, da lugar a la transformación como condición y
            potencia. Se trata entonces de poner en suspenso el diagnóstico para
            apostar al surgimiento o bien, al fortalecimiento de las capacidades
            de esa persona, y habilitando un espacio para la expresión de sus
            deseos.
          </p>
          <p className="text-start">
            Somos un grupo humano que continúa creciendo profesionalmente, en
            constante formación. Aprendemos del trabajo con otros y en el
            intercambio constante.
          </p>
        </div>
      </div>
    </div>
  </div>
);

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
