import { Todo } from './Todo';
import { RandomText } from './randomText';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export function Events() {
  return (
    <>
      <Todo></Todo>
      <RandomText></RandomText>
    </>
  );
}
