import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import "./chatbot.scss";

const sinCertificado = [
  {
    id: "sin-certificado",
    message:
      "Si no contas con CUD te invitamos a que te asesores antes de proseguir con nosotras, ya que al tener CUD tendrias todas las prestaciones cubiertas. Sino podes comunicarte y vemos que propuesta hacerte de acuerdo a tu demanda. Envianos mail a deeepsacios@gmail.com",
    trigger: "sin-certificado2",
  },
  {
    id: "sin-certificado2",
    message:
      "También te recomendamos ingresar a la pagina de la Agencia Nacional de Discapacidad (ANDIS), en la cual se te informan tus derechos y  programas que el Estado te ofrece para asegurar la inclusión social y el acceso a la salud: https://www.argentina.gob.ar/andis",
    trigger: "sin-certificado3",
  },
  {
    id: "sin-certificado3",
    message: "Muchas gracias por comunicarte con nosotras, hasta luego!",
    end: true,
  },
];

const conCertificado = [
  {
    id: "con-certificado",
    message:
      "Los requisitos para autorizar la prestación empiezan con una orden médica indicando cantidad de horas diarias y un resumen del motivo del pedido.",
    trigger: "obra-social-question",
  },
  {
    id: "obra-social-question",
    message: "¿Tenés obra social o prepaga?",
    trigger: "obra-social-options",
  },
  {
    id: "obra-social-options",
    options: [
      { value: 1, label: "Si, tengo", trigger: "con-obrasocial" },
      {
        value: 2,
        label: "No, quiero hacerlo de forma particular",
        trigger: "sin-obrasocial",
      },
    ],
  },
  {
    id: "con-obrasocial",
    message:
      "Si tenés obra social o prepaga te sugerimos averiguar cómo cubre la prestación. Puede ser como acompañante terapéutico, como prestación de apoyo a domicilio, o como modulo de apoyo a la integración. Segun cómo autorice la prestación, asi debe estar escrito en la orden médica.",
    trigger: "con-obrasocial2",
  },
  {
    id: "con-obrasocial2",
    message:
      "Podés comunicarte con nosotras via mail a deespacios@gmail.com o al telefono +54 9 11 58254361 (Lic. Nuria Carolina Gimenez)",
    end: true,
  },
  {
    id: "sin-obrasocial",
    message:
      "En caso de buscar cobertura particular podes comunicarte con nosotras via mail a deespacios@gmail.com o al telefono +54 9 11 58254361 (Lic. Nuria Carolina Gimenez)",
    trigger: "sin-obrasocial2",
  },
  {
    id: "sin-obrasocial2",
    message:
      "Te dejamos tambien un documento de la Comisión para la Plena Participación e Inclusión de las Personas con Discapacidad (COPIDIS) del Gobierno de la Ciudad de Buenos Aires que explica de manera clara cómo realizar los trámites y cuáles son tus derechos. https://www.buenosaires.gob.ar/sites/gcaba/files/guia_de_informacion__para_personas_con_discapacidad_reducida_2016_1.pdf",
    end: true,
  },
];

const steps = [
  {
    id: "hello",
    message: "Hola!",
    trigger: "presentation",
  },
  {
    id: "presentation",
    message:
      "DeEspacios es un equipo de acompañantes terapéuticas que trabajamos en domicilios y también realizamos apoyo externo a la integración en escuelas.",
    trigger: "question1",
  },
  {
    id: "question1",
    message: "¿Qué estás buscando?",
    trigger: "options1",
  },
  {
    id: "options1",
    options: [
      { value: 1, label: "Busco AT en Domicilio", trigger: "question2" },
      {
        value: 2,
        label: "Busco AT en Integración en Escuelas",
        trigger: "question2",
      },
    ],
  },
  {
    id: "question2",
    message:
      "Para saber cómo ayudarte necesitamos saber si contás con Certificado de Discapacidad (CUD)?",
    trigger: "options2",
  },
  {
    id: "options2",
    options: [
      { value: 1, label: "Si", trigger: "con-certificado" },
      { value: 2, label: "No", trigger: "sin-certificado" },
    ],
  },
  ...sinCertificado,
  ...conCertificado,
];

const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "rgb(94, 24, 125)",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "rgb(94, 24, 125)",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

function Chatbot() {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        className="Chatbot"
        floating={true}
        steps={steps}
        bubbleStyle={{
          textAlign: "left",
          maxWidth: "70%",
        }}
        style={{
          fontFamily: "inherit",
        }}
      />
    </ThemeProvider>
  );
}

export default Chatbot;
