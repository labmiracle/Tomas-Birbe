import { useState } from "react";

export function Word() {
  const [word, setWord] = useState('');

  function increment() {
    setWord(word + 'a');
  }

  function decrement() {
    setWord(word.substring(0, word.length - 1));
  }

  return (
    <div>
      <p>{word}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}
