import { useState } from 'react';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export function Events() {
  const [todo, setTodo] = useState({} as Todo);

  function getTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.completed);
        setTodo(data);
      });
  }
  return (
    <>
      <p>userId:{todo.userId}</p>
      <p>id:{todo.id}</p>
      <p>title:{todo.title}</p>
      <p>
        completed:
        {todo.completed !== undefined ? todo.completed.toString() : ''}
      </p>
      <button onClick={getTodo}>Obtener todo</button>
    </>
  );
}
