import React from "react";
import styles from "./Input.module.css";

export const Input = React.forwardRef(
  (
    props: React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>
  ) => <input {...props} className={styles.input} ref={ref} />
);
