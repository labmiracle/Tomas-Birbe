import { useState } from 'react';
import { IncrementButton } from './IncrementButton';
import { DecrementButton } from './DecrementButton';
import { Display } from './Display';

export function Counter() {
  const [word, setWord] = useState('');
  const [counter, setCounter] = useState(0);

  function incrementWord() {
    setWord(word + 'a');
  }

  function decrementWord() {
    setWord(word.substring(0, word.length - 1));
  }

  function incrementCounter() {
    setCounter(counter + 1);
  }

  function decrementCounter() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <Display content={word}></Display>
      <IncrementButton handleClick={incrementWord}>-</IncrementButton>
      <DecrementButton handleClick={decrementWord}>+</DecrementButton>

      <Display content={counter.toString()}></Display>
      <IncrementButton handleClick={incrementCounter}>-</IncrementButton>
      <DecrementButton handleClick={decrementCounter}>+</DecrementButton>
    </div>
  );
}
