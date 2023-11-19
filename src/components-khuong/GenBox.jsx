import React, { useState } from "react";
import styles from "./GenBox.module.css";
export default function GenBox({ index = 0 }) {
  const [randomColor, setRandomColor] = useState("gray");
  const handleOnClick = () => {
    setRandomColor(
      `rgb(${Math.random() * 256},${Math.random() * 256},${
        Math.random() * 256
      })`
    );
  };
  return (
    <div
      onClick={handleOnClick}
      style={{ backgroundColor: randomColor }}
      className={styles.defaults}
    >{`Box #${index + 1}`}</div>
  );
}
