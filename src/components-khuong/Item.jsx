import React, { useState } from "react";
import Header from "./Header";
import Button from "./Button";
import "../item.css";
export default function () {
  const [itemCount, setItemCount] = useState(0);
  const handleClick = () => {
    setItemCount((prev) => prev + 1);
  };
  return (
    <div className="box">
      <Header title={itemCount == 0 ? "No Items" : `${itemCount} Items`} />
      <Button onClick={handleClick}>Increment</Button>
    </div>
  );
}
