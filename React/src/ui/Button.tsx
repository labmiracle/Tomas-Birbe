import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
};

export function Button({
  children,
  ...props
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={styles.btn}>
      {children}
    </button>
  );
}
