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

const steps = [
  {
    id: "hello",
    message: "Hola!",
    trigger: "presentation",
  },
  {
    id: "presentation",
    message: "DeEspacios es un equipo...",
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
      { value: 1, label: "Si", trigger: "sin-certificado" },
      { value: 2, label: "No", trigger: "sin-certificado" },
    ],
  },
  ...sinCertificado,
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
