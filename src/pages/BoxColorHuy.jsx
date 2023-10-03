import { useState } from "react";

const colours = ["red", "yellow", "aqua", "pink"];

const BoxesContainer = () => {
  const [selectedColor, setColor] = useState(null);

  const handleSelectColor = color => {
    setColor(color);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: 600,
      }}
    >
      {colours.map(color => (
        <Box key={color} defaultColor={color} handleSelectColor={handleSelectColor} selectedColor={selectedColor} />
      ))}
    </div>
  );
};

const Box = ({ defaultColor, handleSelectColor, selectedColor }) => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    if (active) {
      setActive(false);
      handleSelectColor(null);
    } else {
      setActive(true);
      handleSelectColor(defaultColor);
    }
  };

  return (
    <div
      style={{
        width: 300,
        backgroundColor: selectedColor !== null ? selectedColor : defaultColor,
        height: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "capitalize",
      }}
      onClick={handleActive}
    >
      {defaultColor}
    </div>
  );
};

export default BoxesContainer;
