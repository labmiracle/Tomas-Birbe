import { RemoveTaskButton } from "./RemoveTaskButton";
import type { Todo } from "./types";
import styles from "./ListItem.module.css";

export function ListItem({
  todo,
  onDelete,
}: {
  todo: Todo;
  onDelete: (todo: Todo) => void;
}) {
  return (
    <li className={styles.item}>
      <p>{todo.description}</p>
      <RemoveTaskButton handleClick={() => onDelete(todo)} />
    </li>
  );
}
