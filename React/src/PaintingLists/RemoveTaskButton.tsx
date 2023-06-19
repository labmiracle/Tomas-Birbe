import type { Todo } from "./types";

export function RemoveTaskButton({ handleClick }: { handleClick: () => void }) {
  return <button onClick={handleClick}>X</button>;
}
