import { useEffect } from "react";

export function ThirdExcercise({
  isSecondExcerciseMounted,
}: {
  isSecondExcerciseMounted: boolean;
}) {
  useEffect(() => {
    console.log("actualizado!");
  }, [isSecondExcerciseMounted]);

  return <p>Tercer ejercicio</p>;
}
