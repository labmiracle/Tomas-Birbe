import styles from "./List.module.css";

export function List({ children }: { children: React.ReactNode }) {
  return <ul className={styles.list}>{children}</ul>;
}
