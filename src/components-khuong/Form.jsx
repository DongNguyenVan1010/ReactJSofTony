import React from "react";
import clsx from "clsx";
import styles from "./Form.module.css";
export default function Form({
  children,
  row,
  borderBottom,
  onSubmit = () => {},
  sx = {},
  ...extras
}) {
  return (
    <form
      {...extras}
      style={sx}
      className={clsx(
        styles.form,
        row && styles.row,
        borderBottom && styles["border-bottom"]
      )}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
