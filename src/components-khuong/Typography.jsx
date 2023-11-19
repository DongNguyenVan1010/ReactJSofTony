import React from "react";
import clsx from "clsx";
import styles from "./Typography.module.css";
export default function Typography({
  style = {},
  children,
  hidden,
  block = false,
  variant = "info",
}) {
  return (
    <span
      className={clsx(
        styles[variant],
        block && styles.block,
        hidden && styles.hidden,
        styles.defaults
      )}
      style={style}
    >
      {children}
    </span>
  );
}
