import React from "react";
import "../item.css";
import clsx from "clsx";
import style from "./Button.module.css";
export default function Button({
  styles,
  children,
  disabled = false,
  small,
  type = "",
  ...rest
}) {
  return (
    <button
      {...rest}
      type={type}
      style={styles}
      disabled={disabled}
      className={clsx("btn", small && style.small)}
    >
      {children}
    </button>
  );
}
