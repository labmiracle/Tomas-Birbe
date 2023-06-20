import { OldCounter } from "./OldCounter";
import { Word } from "./Word";
import styles from "./index.module.css";

export function State() {
  return (
    <div className={styles.container}>
      <h3>Primer ejercicio</h3>
      <OldCounter></OldCounter>
      <h3>Segundo ejercicio</h3>
      <Word></Word>
    </div>
  );
}
