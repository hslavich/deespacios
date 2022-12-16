import "./App.scss";
import { Outlet } from "react-router-dom";

import MyNavbar from "./components/shared/MyNavbar";
import Chatbot from "./components/shared/Chatbot";

function App() {
  return (
    <>
      <div className="App">
        <MyNavbar />
        <Outlet />
      </div>
      <Chatbot />
    </>
  );
}

export default App;
