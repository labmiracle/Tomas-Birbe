import { ButtonHTMLAttributes } from "react";
import styles from "./SecondaryButton.module.css";

type Props = {
  children: React.ReactNode;
};

export function SecondaryButton({
  children,
  ...props
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={styles.btn}>
      {children}
    </button>
  );
}
