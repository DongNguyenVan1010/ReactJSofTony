import React from "react";
import "./Item.css";
export default function Button({ styles, children, ...props }) {
  return (
    <button {...props} style={styles} className="button">
      {children}
    </button>
  );
}
