import "./App.scss";
import { Outlet } from "react-router-dom";

import MyNavbar from "./components/shared/myNavbar";
import Chatbot from "./components/shared/chatbot";

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
