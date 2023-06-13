import { useState } from 'react';

export function RandomText() {
  const [text, setText] = useState('');

  return (
    <>
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
