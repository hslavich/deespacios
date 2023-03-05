import React, { useRef } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../shared/title";

import "./somos.scss";

import directoras from "../../assets/directoras.png";
import logo from "../../assets/logo.png";
import Equipo from "../../assets/equipo/index";

const handleClickScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

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
          <ul className="nombres">
            <li>Lic. Nuria Carolina Gimenez </li>
            <li>Lic. Virginia Zienka Hogan</li>
          </ul>
        </Col>
      </Row>
      <Row className="fotos-equipo">
        <Col>
          <button
            className="btn btn-link"
            onClick={() => handleClickScroll("bio-elizabeth")}
          >
            <img src={Equipo.Equipo1} alt="equipo1"></img>
          </button>
        </Col>
        <Col>
          <button
            className="btn btn-link"
            onClick={() => handleClickScroll("bio-juan")}
          >
            <img src={Equipo.Equipo2} alt="equipo2"></img>
          </button>
        </Col>
        <Col>
          <button
            className="btn btn-link"
            onClick={() => handleClickScroll("bio-ailen")}
          >
            <img src={Equipo.Equipo3} alt="equipo3"></img>
          </button>
        </Col>
        <Col>
          <button
            className="btn btn-link"
            onClick={() => handleClickScroll("bio-julieta")}
          >
            <img src={Equipo.Equipo4} alt="equipo4"></img>
          </button>
        </Col>
        <Col>
          <button
            className="btn btn-link"
            onClick={() => handleClickScroll("bio-mariajose")}
          >
            <img src={Equipo.Equipo5} alt="equipo5"></img>
          </button>
        </Col>
        <Col>
          <button
            className="btn btn-link"
            onClick={() => handleClickScroll("bio-agostina")}
          >
            <img src={Equipo.Equipo6} alt="equipo6"></img>
          </button>
        </Col>
        <Col>
          <button
            className="btn btn-link"
            onClick={() => handleClickScroll("bio-astrid")}
          >
            <img src={Equipo.Equipo7} alt="equipo7"></img>
          </button>
        </Col>
      </Row>
      <Bio
        id="bio-nuria"
        name="Licenciada Nuria Carolina Gimenez (Directora)"
        text={textBio1}
      />
      <Bio
        id="bio-virginia"
        name="Licenciada Virginia Zienka Hogan (Directora)"
        text={textBio2}
      />
      <Bio
        id="bio-elizabeth"
        name="Licenciada Elizabeth Natalia Conte (Coordinadora General)"
        text={textBio3}
      />
      <Bio
        id="bio-macarena"
        name="Licenciada Macarena Marchese (Coordinadora Psicopedagógica)"
        text={textBio4}
      />
      <Bio
        id="bio-mariajose"
        name="Licenciada María José Serrano (Coordinadora de talleres)"
        text={textBio5}
      />
      <Bio
        id="bio-agostina"
        name="Agostina Larroude (Coordinadora Referente)"
        text={textBio6}
      />
      <Bio
        id="bio-ailen"
        name="Licenciada Ailén Mastrolia (Coordinadora Referente)"
        text={textBio7}
      />
      <Bio
        id="bio-astrid"
        name="Astrid Oliveira (Coordinadora Referente)"
        text={textBio8}
      />
      <Bio
        id="bio-juan"
        name="Lic. Juan Barbieri (Coordinador Referente)"
        text={textBio9}
      />
      <Bio
        id="bio-julieta"
        name="Julieta Ceconi (Coordinadora Referente)"
        text={textBio10}
      />
    </Container>
  </>
);

const Bio = ({ name, text, id }) => {
  return (
    <Row>
      <Col className="justify-content-center bio" id={id}>
        <h3 className="bio-title mt-5">{name}</h3>
        {text}
      </Col>
    </Row>
  );
};

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
    <div className="mx-auto text-center">
      <img src={logo} alt="logo"></img>
    </div>
  </>
);

const textBio1 = (
  <p>
    Es Licenciada en Psicología por la Universidad de Buenos Aires. Tiene un
    Posgrado en Psicoanálisis con Niños y Adolescentes por el Hospital Infanto
    Juvenil Carolina Tobar Garcia, donde realizó el curso teórico-práctico de
    Acompañamiento Terapéutico. Asimismo, realizó su formación clínica en el
    Posgrado en Clínica Psicoanalítica, en La Tercera. Realizó la Diplomatura
    universitaria en Políticas, Planificación, Gestión y Administración de
    Instituciones y Servicios de Salud Mental por la Asociación Argentina de
    Salud Mental (AASM). Fue Docente en la Práctica Profesional: Instituciones
    Forenses, de la Universidad de Buenos Aires- Facultad de Psicología-
    Hospital DR. J.T BORDA. Allí trabajó como coordinadora del Taller de
    expresión musical, en el Htal. Borda y de Grupos de Terapia Familiar.
    Participó en cursos y grupos de estudio de diferentes Instituciones, entre
    los que se destaca: Instituto Oscar Massota, Asociación Argentina de Salud
    Mental, Escuela Freudiana de Buenos Aires. Fue expositora en las jornadas
    hospitalarias del Hospital Estevez. Se desempeñó como Psicóloga de guardia
    en Cetrap y como Psicóloga clínica en atención en consultorio para Centro
    Medico Azul. Realizó acompañamientos terapéuticos en ámbito escolar,
    domiciliario y hospitalario. Fundó el equipo de acompañamientos terapéuticos
    DeEspacios, realizando tareas de supervisión y coordinación de equipos.
    Actualmente dirije el centro psicoterapeutico DeEspacios.
  </p>
);

const textBio2 = (
  <p>
    Es Licenciada en Psicología por la Universidad de Buenos Aires. Operadora
    grupal y Psicdramatista por la Escuela Tato Pavlovsky. Completó la
    Concurrencia del Gobierno de Buenos Aires en el Hospital Infanto Juvenil
    Carolina Tobar Garcia, que le dió la Especialización en Clínica con Niños y
    Adolescentes. Reforzó su formación realizando el Posgrado en Psicoanálisis
    con Niños y Adolescentes y también alli realizó el curso teórico- práctico
    de Acompañamiento Terapéutico. Se formó en clínica psicoanalítica
    participando en la red de Enseñanza y Transmisión realizando Seminarios en
    la Escuela Freudiana de Buenos Aires. Fue expositora en Jornadas y Congresos
    de distintas Instituciones de formación y atención, entre las que se destaca
    la Asociación Argentina de Salud Mental (AASM), el Hospital de Niños Ricardo
    Gutierrez, Hospital Estevez. y la Escuela de Freudiana de Buenos Aires
    (EFBA). Actualmente se encuentra realizando la Maestría en Epidemiología,
    Gestión y Políticas en Salud de la Universidad Nacional de Lanús. Se dedica
    a la práctica clínica en consultorio privado Realizó acompañamientos
    terapéuticos en ámbito escolar, domiciliario y hospitalario. Fundó el equipo
    de acompañamientos terapéuticos Deespacios, realizando tareas de supervisión
    y coordinación de equipos. Actualmente dirige el centro psicoterapeutico
    DeEspacios.
  </p>
);

const textBio3 = (
  <p>
    Se recibió de Psicóloga con Diploma de Honor y nombrada escolta en la
    Universidad de Buenos Aires. Se desempeñó como docente de la Práctica
    Profesional “Instituciones forenses”- UBA- Facultad de Psicología- Hospital
    DR. J.T BORDA. En dicho hospital ejerció como coordinadora de Talleres
    Terapéuticos y de Grupos de Terapia Familiar, y participó en cursos y grupos
    de estudio. Fue Docente de Curso preparatorio para el Examen de Residencia
    en Psicología Clínica de la Ciudad de Buenos Aires y la Provincia de Buenos
    Aires a cargo de los Módulos de Clínica y Psicoanálisis. En el ámbito
    privado, trabajó como acompañante terapéutica y psicóloga en instituciones
    para la tercera edad, en este último ámbito ha sido expositora en distintas
    Jornadas de Gerontología. Ha participado de cursos, seminarios y congresos
    relacionados con la clinica psicoanalítica de UBA –UCES - Centro de Salud
    Mental N 1- Asociación Argentina de Psiquiatras y World Psychiatric
    Association. Actualmente, trabaja como psicóloga en la atención de
    Adolescentes, Adultos y Adultos Mayores. Se desempeña en el Equipo
    Deespacios como coordinadora general y supervisora psicoterapéutica.
    Encargada del intercambio con profesionales externos.
  </p>
);

const textBio4 = (
  <p>
    Es Licenciada en Psicopedagogía, por la Universidad Nacional de Lomas de
    Zamora y Estimuladora Temprana, por la Escuela de Psicología Social de
    Quilmes. Ha realizado diversos cursos, capacitaciones y jornadas sobre
    educación inclusiva, discapacidad y TEA. Posee experiencia en el ámbito
    clínico como psicopedagoga en el área de discapacidad con niños,
    adolescente, jóvenes y adultos mayores. A su vez, ha desempeñado tareas como
    Acompañante Externa en distintas Instituciones Educativas. Actualmente, se
    desempeña como Orientadora de los Aprendizajes en Equipo de Orientación
    Escolar en el Nivel Inicial y Primario, como Psicopedagoga en Centro
    Psicoanalítico Interdisciplinario y como Coordinadora Psicopedagógica de los
    procesos de Inclusión Educativa en Equipo de Acompañantes Terapéuticos
    DeEspacios.
  </p>
);

const textBio5 = (
  <p>
    Es Licenciada en Psicopedagogía por la Universidad Nacional de Lomas de
    Zamora (UNLZ). Posee experiencia en su rol como Acompañante Terapéutica,
    tanto en infancias, como adolescencias y adultos mayores también. Ha
    realizado diversos talleres que enriquecen su práctica tales como
    Orientación Vocacional-laboral; E.S.I; Astrología; Yoga &amp; Escritura;
    Reiki Nivel I. Actualmente, se encuentra estudiando la Diplomatura en
    Psicopedagogía Holística en la Universidad Abierta Interamericana, con el
    fin de ampliar su mirada y florecerse de otros lenguajes para abordar al
    otro desde su singularidad y ser. Realiza acompañamiento terapéutico y
    orientación de los aprendizajes escolares en tratamientos individuales del
    equipo DeEspacios. Actualmente, ejerce la función de Coordinadora de
    talleres del Equipo DeEspacios.
  </p>
);

const textBio6 = (
  <p>
    Es Estimuladora temprana y Acompañante terapéutico por Instituto Profesional
    de Enseñanza Superior. Realizó diversos cursos de formación relacionados con
    el trabajo con discapacidad, relativos a trastornos del neurodesarrollo en
    adultos y niños, TDAH, TEA, etc. Su desempeño laboral se forjó en diversos
    ámbitos terapéuticos tanto como educativos como asistenciales. Realizando
    integraciones escolares y acompañamientos terapéuticos en domicilios.
    Actualmente se desempeña como coordinadora referente de equipo en De
    espacios Acompañamientos Terapéuticos, en seguimiento y supervisión de
    casos. Además, realiza asistencia en tareas administrativas y contables.
  </p>
);

const textBio7 = (
  <p>
    Es Licenciada en Psicología por la Universidad de Buenos Aires. Formó parte
    de diversos cursos de formación y extensión en la UBA, sobre infancias,
    crianza, discapacidad, psicoanálisis de niños y psicología preventiva.
    Realizó una especialización para tutores con enfoque psicoanalítico Docente
    en la Materia Introducción a la Psicología en la Diplomatura en
    Administracion de Consorcios, a cargo de Apgra, en Universidad Nacional de
    Lomas de Zamora. Tiene experiencia como acompañante terapéutica en diversas
    áreas, mayormente en integraciones escolares y domicilios. Cuenta con
    experiencia interdisciplinaria. Actualmente se desempeña como referente de
    equipo en De espacios Acompañamientos Terapéuticos, en seguimiento y
    supervisión de casos y trabajo con familiares.
  </p>
);
const textBio8 = (
  <p>
    Estudió Relaciones del Trabajo en la Universidad de Buenos Aires. Ha
    realizado los cursos de Acompañamiento Terapéutico dictado por el Licenciado
    Gerardo Primero (Centro Cultural Ricardo Rojas). Es Operador
    Socio-Terapéutico en Adicciones. (RedBa) y Operador Socio-Comunitario con
    perspectiva en promoción de la salud. Certificado Oficial de la DGE,
    provincia de Buenos Aires. Es Grafoanalista científico emocional, se ha
    desempeñado en el rol en el ámbito privado en orientación vocacional.
    Realizó una pasantía en “Fundación Dasein”, un dispositivo pensado para
    afectados por problemáticas de consumo o conductas de riesgo. Ha realizado
    diversos cursos y seminarios relacionados con la discapacidad y abordaje de
    patologías graves, educación sexual integral, tratamientos e intervenciones
    ABA, entre otros. Fue Acompañante Terapéutico en el “Hospital
    Interdisciplinario Psicoasistencial José Tiburcio Borda” en el servicio de
    Bulimia y anorexia. Tiene experiencia en integraciones escolares, centro de
    día, domicilios, internaciones. Actualmente se desempeña como acompañante
    terapéutico en un centro de día y en la función de coordinadora referente
    del equipo en DeEspacios Acompañamientos Terapéuticos en seguimiento y
    supervisión de casos. Además, tiene a cargo la gestión administrativa y
    contable del equipo DeEspacios.
  </p>
);

const textBio9 = (
  <>
    <p>
      Es Psicólogo por la Universidad de Buenos Aires. Coordinador y Operador de
      grupos en psicodrama por la escuela de Tato Pavlosky. Posee experiencia en
      el área clínica con adolescentes y adultos. Realizó cursos orientados
      hacia el trabajo con adicciones. Trabajó en el proceso de acompañamiento
      en el proceso de duelo en el INCUCAI. También posee experiencia como
      acompañante terapéutico trabajando en diferentes ámbitos, escolar, y
      domiciliario, con diferentes patologías; psicosis, adicciones como asi
      también en discapacidad y demencia. Actualmente ejerce la función de
      coordinador referente en el equipo DeEspacios, en seguimiento y
      supervisión de casos. Encargado de la comunicación e intercambio con las
      instituciones asistenciales.
    </p>
    <p>
      Autor del libro: &quot;Psicopolitica del poder mediático: la criminología
      mediática&quot; editorial &quot;Letra Viva, 2022.
    </p>
  </>
);

const textBio10 = (
  <p>
    Estudió Ciencias de la Comunicación en la Universidad de Buenos Aires.
    Actualmente se encuentra finalizando la carrera de Psicología en la
    Universidad de Buenos Aires. Ha realizado el curso de Acompañamiento
    Terapéutico/Fundamentos teóricos y prácticos dictado por el Licenciado
    Gustavo Rossi, en la Universidad de Buenos Aires. Tiene experiencia como
    acompañante terapéutica en diversas áreas: internaciones/ externaciones/
    domicilio/ integraciones escolares. Se especializa en el trabajo clínico con
    patologías graves en la infancia. Cuenta con vasta experiencia
    interdisciplinaria. Actualmente se desempeña como referente de equipo en
    Deespacios Acompañamientos Terapéuticos, realizando seguimiento y
    supervisión de casos. Participa en la elaboración de documentos informativos
    del equipo DeEspacios.
  </p>
);
export default Somos;
