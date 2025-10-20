import "./App.css";
import Header from "./components/Header";
import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not

  // Function to toggle mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <Header
        title="TextUtils"
        About="About US"
        mode={mode}
        toggleMode={toggleMode}
      />
      {mode==='light'?<hr />:<></>}
      {/* <Header About="About US"/> */}

      <div className="container my-3">
        <TextForm heading="Enter the text below" />
      </div>
    </>
  );
}

export default App;
