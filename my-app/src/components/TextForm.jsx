import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // let newText = text.toUpperCase();
    // setText(newText);
    setText(text.toUpperCase());
  };

  const handleLwClick = () => {
    setText(text.toLowerCase());
  };

  const handleEsClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const CopyTextContent = () => {
    let textArea = document.getElementById("text-box");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
  };
  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          placeholder="Enter Anything"
          id="text-box"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control"
          rows="10"
        ></textarea>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLwClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleEsClick}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={CopyTextContent}>
          Copy Text
        </button>
        <button
          className="btn btn-danger my-3 mx-2"
          onClick={() => setText("")}
        >
          Clear Text
        </button>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>
          {text.length !== 0 ? text.split(" ").length : 0} Words and{" "}
          {text.length} Characters.
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
