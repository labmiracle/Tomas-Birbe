import { useState } from "react";
import { Todo } from "./Todo";
import { RandomText } from "./RandomText";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export function Events() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <>
      <h3>Primer ejercicio</h3>
      <Todo></Todo>

      <h3>Segundo ejercicio</h3>
      <RandomText></RandomText>

      <h3>Tercer ejercicio</h3>
      <p>{selectedValue ? selectedValue : "Previsualizacion"}</p>
      <label htmlFor="countries">Elegi un pais</label>
      <select
        name="country"
        id="country"
        onChange={(e) => setSelectedValue(e.target.value)}>
        <option value="Argentina">Argentina</option>
        <option value="Brasil">Brasil</option>
        <option value="Chile">Chile</option>
        <option value="Uruguay">Uruguay</option>
      </select>
    </>
  );
}
