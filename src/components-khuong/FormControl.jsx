import clsx from "clsx";
import React from "react";
import styles from "./FormControl.module.css";
export default function FormControl({
  children,
  fullWidth,
  inlined,
  margin,
  sx,
}) {
  return (
    <div
      style={sx}
      className={clsx(fullWidth, margin, inlined && styles.inlined)}
    >
      {children}
    </div>
  );
}
