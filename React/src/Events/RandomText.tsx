import { useState } from 'react';
import { Todo } from './Todo';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export function RandomText() {
  const [text, setText] = useState('');

  return (
    <>
      <Todo></Todo>
      <p>Escribi cualquier texto!</p>
      <p>{text}</p>
      <label htmlFor="randomText">Texto </label>
      <input
        type="text"
        id="randomText"
        placeholder="Cualquier texto"
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}
