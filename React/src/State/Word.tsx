import { useState } from "react";
import { Button } from "../ui/Button";
import styles from "./index.module.css";

export function Word() {
  const [word, setWord] = useState("");

  function increment() {
    setWord(word + "a");
  }

  function decrement() {
    setWord(word.substring(0, word.length - 1));
  }

  return (
    <div>
      <p className={styles.display}>{word}</p>
      <div className={styles.buttonContainer}>
        <Button onClick={decrement}>-</Button>
        <Button onClick={increment}>+</Button>
      </div>
    </div>
  );
}
