import React, { useState } from "react";
import CellColor from "../components-khuong/CellColor";
export default function BoxColorKhuong() {
  const [boxColor, setBoxColor] = useState("multi");
  const colorList = ["red", "gold", "aqua", "purple"];
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", width: "50%" }}
    >
      {colorList.map((color) => (
        <CellColor
          cellColor={color}
          key={color}
          boxColor={boxColor}
          setBoxColor={setBoxColor}
        />
      ))}
    </div>
  );
}
