import { usePosts } from "./usePosts";

export function FiveExcercise() {
  const todos = usePosts();

  return (
    <>
      <p>Quinto ejercicio</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
