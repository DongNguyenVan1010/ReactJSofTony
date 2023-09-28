import React from "react";
import clsx from "clsx";
import styles from "./InputLabel.module.css";
export default function InputLabel({ text, xs, htmlFor, variant }) {
  return (
    <label for={htmlFor} style={xs} className={clsx(styles[variant])}>
      {text}
    </label>
  );
}
