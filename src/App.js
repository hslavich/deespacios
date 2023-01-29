import { useState } from "react";
import "./App.scss";
import { Outlet } from "react-router-dom";

import MyNavbar from "./components/shared/myNavbar";
import Chatbot from "./components/shared/chatbot";

function App() {
  const [opened, setOpened] = useState(false);

  const toggleOpen = (status) => {
    setOpened(status.opened === undefined || status.opened);
  };

  return (
    <>
      <div className="App">
        <MyNavbar />
        <Outlet context={[toggleOpen]} />
      </div>
      <Chatbot opened={opened} toggleOpen={toggleOpen} />
    </>
  );
}

export default App;
