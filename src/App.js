import "./App.scss";

import Index from "./components/Index/Index";
import Chatbot from "./components/shared/Chatbot";

function App() {
  return (
    <>
      <div className="App">
        <Index />
      </div>
      <Chatbot />
    </>
  );
}

export default App;
