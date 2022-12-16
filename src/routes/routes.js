import { createBrowserRouter } from "react-router-dom";

import Index from "../components/Index/Index";
import Somos from "../components/Somos/Somos";
import App from "../App";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "/quienes-somos",
        element: <Somos />,
      },
    ],
  },
]);

export default Router;
