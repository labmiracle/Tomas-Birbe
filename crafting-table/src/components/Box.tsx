import styles from "./Box.module.css";

interface Props {
  value: string;
}

export function Box({ value }: Props) {
  return <div className={styles.box}>{value}</div>;
}
