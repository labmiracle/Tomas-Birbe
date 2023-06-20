import { useState } from "react";
import { Todo } from "./Todo";
import { RandomText } from "./RandomText";
import styles from "./index.module.css";
import { SelectCountry } from "./SelectCountry";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export function Events() {
  return (
    <div className={styles.container}>
      <h3>Primer ejercicio</h3>
      <Todo></Todo>

      <h3>Segundo ejercicio</h3>
      <RandomText></RandomText>

      <h3>Tercer ejercicio</h3>
      <SelectCountry />
    </div>
  );
}
