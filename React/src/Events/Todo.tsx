import { useState } from "react";
import { Button } from "../ui/Button";
import styles from "./index.module.css";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export function Todo() {
  const [todo, setTodo] = useState({} as Todo);

  function getTodo() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.completed);
        setTodo(data);
      });
  }

  function clearTodo() {
    setTodo({} as Todo);
  }
  return (
    <>
      <p>userId:{todo.userId}</p>
      <p>id:{todo.id}</p>
      <p>title:{todo.title}</p>
      <p>
        completed:
        {todo.completed !== undefined ? todo.completed.toString() : ""}
      </p>
      <div className={styles.buttonContainer}>
        <Button onClick={getTodo}>Obtener tarea</Button>
        <Button onClick={clearTodo}>Limpiar tarea</Button>
      </div>
    </>
  );
}
