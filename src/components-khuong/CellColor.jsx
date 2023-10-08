import React, { useState } from "react";
import styles from "./CellColor.module.css";
import clsx from "clsx";
import Typography from "./Typography";
export default function CellColor({ cellColor, boxColor, setBoxColor }) {
  const [isToggle, setIsToggle] = useState(() => false);
  const handleOnclick = () => {
    if (!isToggle) {
      setBoxColor(cellColor);
    } else {
      setBoxColor("multi");
    }
    setIsToggle((prev) => !prev);
  };
  return (
    <div
      className={clsx(
        styles.cellcolor,
        boxColor == "multi" ? styles[cellColor] : styles[boxColor]
      )}
      onClick={handleOnclick}
    >
      <span>{cellColor[0].toUpperCase() + cellColor.slice(1)}</span>
    </div>
  );
}
