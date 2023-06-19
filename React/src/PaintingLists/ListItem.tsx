import { RemoveTaskButton } from "./RemoveTaskButton";
import type { Todo } from "./types";

export function ListItem({
  todo,
  onDelete,
}: {
  todo: Todo;
  onDelete: (todo: Todo) => void;
}) {
  return (
    <li>
      <p>{todo.description}</p>
      <RemoveTaskButton handleClick={() => onDelete(todo)} />
    </li>
  );
}
