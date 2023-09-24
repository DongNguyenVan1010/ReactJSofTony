import React from "react";
import "./Item.css";
export default function Button(props) {
  return (
    <button {...props.extras} style={props.styles} className="button">
      {props.children}
    </button>
  );
}
