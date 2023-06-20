import styles from "./Select.module.css";

type Props = {
  children: React.ReactNode;
};

export function Select({
  children,
  ...props
}: Props & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} className={styles.select}>
      {children}
    </select>
  );
}
