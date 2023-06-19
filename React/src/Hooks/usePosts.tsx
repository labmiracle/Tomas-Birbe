import { useEffect, useState } from "react";

type Todo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export function usePosts() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  return todos;
}
