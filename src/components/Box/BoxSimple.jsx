import React from 'react'

function BoxSimple({ number }) {
  const [random, setRandom] = React.useState(number);
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return (
    <div 
      style={{ 
        width: "128px", 
        height: "128px", 
        backgroundColor: number !== random ? `rgb(${r}, ${g}, ${b})` : "gray", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        textAlign: "center" 
      }} 
      onClick={() => setRandom(Math.random())}
    >
      Box #{number}
    </div>
  );
}

export default BoxSimple