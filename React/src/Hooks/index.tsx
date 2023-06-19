import { useState } from "react";
import { FirstExercise } from "./FirstExercise";
import { SecondExcercise } from "./SecondExcercise";
import { ThirdExcercise } from "./ThirdExcercise";
import { FourthExcercise } from "./FourthExcercise";
import { FiveExcercise } from "./FiveExcercise";

export function Hooks() {
  const [showSecondExcercise, setShowSecondExcercise] = useState(true);

  function toggleSecondExcercise() {
    setShowSecondExcercise(!showSecondExcercise);
  }

  return (
    <>
      <h3>Primer ejercicio</h3>
      <FirstExercise />
      <h3>Segundo ejercicio</h3>
      <div>
        {showSecondExcercise && <SecondExcercise />}
        <button onClick={toggleSecondExcercise}>
          {showSecondExcercise
            ? "Desmontar segundo ejercicio"
            : "Montar segundo ejercicio"}
        </button>
      </div>
      <h3>Tercer ejercicio</h3>
      <ThirdExcercise isSecondExcerciseMounted={showSecondExcercise} />
      <h3>Cuarto ejercicio</h3>
      <FourthExcercise />
      <h3>Quinto ejercicio</h3>
      <FiveExcercise />
    </>
  );
}
