import { useEffect, useState } from "react";

type Todo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export function FourthExcercise() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  return (
    <>
      <p>Cuarto ejercicio</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
