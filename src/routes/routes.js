import { createHashRouter } from "react-router-dom";

import App from "../App";
import Index from "../components/index";
import Somos from "../components/somos/somos";
import Terapeutico from "../components/terapeutico/terapeutico";
import Trabajamos from "../components/trabajamos/trabajamos";
import Consultorios from "../components/consultorios/consultorios";
import Talleres from "../components/talleres/talleres";

const Router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "/quienes-somos",
        element: <Somos />,
      },
      {
        path: "/acompañamiento-terapeutico",
        element: <Terapeutico />,
      },
      {
        path: "/como-trabajamos",
        element: <Trabajamos />,
      },
      {
        path: "/consultorios-externos",
        element: <Consultorios />,
      },
      {
        path: "/talleres",
        element: <Talleres />,
      },
    ],
  },
]);

export default Router;
