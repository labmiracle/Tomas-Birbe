import { useEffect } from "react";

export function SecondExcercise() {
  useEffect(() => {
    return () => {
      console.log("Desmontado!");
    };
  }, []);

  return <p>Segundo ejercicio de hooks: Montado!</p>;
}
