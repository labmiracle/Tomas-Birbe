import { useState } from "react";

export function FirstExercise() {
  const [text, setText] = useState("");

  function formattedText() {
    let formattedText = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] === "a") {
        formattedText += "b";
      } else {
        formattedText += text[i];
      }
    }

    return formattedText;
  }

  return (
    <>
      <p>{text === "" ? "Previsualizacion del texto" : formattedText()}</p>
      <label htmlFor="aIntob">Ingresa una palabra </label>
      <input
        type="text"
        id="aIntob"
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}
