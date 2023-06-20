import { useState } from "react";
import { Button } from "../ui/Button";
import styles from "./index.module.css";

export function OldCounter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <div className={styles.buttonContainer}>
        <Button onClick={decrement}>-</Button>
        <p className={styles.display}>{counter}</p>
        <Button onClick={increment}>+</Button>
      </div>
    </div>
  );
}
