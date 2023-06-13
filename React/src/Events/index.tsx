import { useState } from 'react';
import { Todo } from './Todo';

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
    </>
  );
}
