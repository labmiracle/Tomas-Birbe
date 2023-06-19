import { useState } from "react";
import { ListContainer } from "./ListContainer";
import { List } from "./List";
import { ListItem } from "./ListItem";
import { InputText } from "./InputText";
import { AddTaskButton } from "./AddTaskButton";
import type { Todo } from "./types";

export function PaintingList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const newTodo = (event.target as HTMLFormElement).newTodoInput.value.trim();

    if (newTodo) {
      setTodos([
        ...todos,
        {
          id: new Date().getTime().toString(),
          description: newTodo,
          completed: false,
        },
      ]);
    }

    (event.target as HTMLFormElement).reset();
  }

  function deleteTodo(todoToDelete: Todo) {
    setTodos(todos.filter((todo) => todo.id !== todoToDelete.id));
  }

  return (
    <ListContainer>
      <form onSubmit={handleSubmit}>
        <InputText id="newTodoInput" />
        <AddTaskButton />
      </form>
      <List>
        {todos.map((todo) => (
          <ListItem todo={todo} onDelete={deleteTodo} key={todo.id} />
        ))}
      </List>
    </ListContainer>
  );
}
