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
<<<<<<< HEAD
      <Button onClick={handleClick}>Increment</Button>
=======
      <Button onClick={handleClick} >Increment</Button>
>>>>>>> 7471e4aa858820d75a4bd3d7f1b4f8275db6102d
    </div>
  );
}
