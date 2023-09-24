import React from "react";
import "./Item.css";
export default function Header({ title, styles }) {
  return (
    <h2 className="header" style={styles}>
      {title}
    </h2>
  );
}
