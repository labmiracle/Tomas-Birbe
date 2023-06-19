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
      <FirstExercise />
      <div>
        {showSecondExcercise && <SecondExcercise />}
        <button onClick={toggleSecondExcercise}>
          {showSecondExcercise
            ? "Desmontar segundo ejercicio"
            : "Montar segundo ejercicio"}
        </button>
      </div>
      <ThirdExcercise isSecondExcerciseMounted={showSecondExcercise} />
      <FourthExcercise />
      <FiveExcercise />
    </>
  );
}
