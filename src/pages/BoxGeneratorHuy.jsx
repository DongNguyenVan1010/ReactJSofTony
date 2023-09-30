import { useState } from "react";

function BoxGeneratorHuy() {
  const [formValue, setFormValue] = useState(0);
  const [boxNumber, setBoxNumber] = useState(0);

  return (
    <div>
      <h1>Box Generator</h1>
      <div>
        <form
          onSubmit={event => {
            event.preventDefault();
            setBoxNumber(formValue);
          }}
        >
          <label htmlFor="boxNumber">Number of boxes</label>
          <input type="number" min={1} max={128} name="boxNumber" id="boxNumber" value={formValue} onChange={event => setFormValue(event.target.valueAsNumber)} />
          <button type="submit">Generate</button>
        </form>

        <div style={{ width: "100%", height: "1px", backgroundColor: "gray", marginTop: "20px", marginBottom: "20px" }}></div>

        <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "512px", gap: "16px" }}>{boxNumber > 0 ? Array.from({ length: boxNumber }).map((_, index) => <Box key={index} number={index + 1} />) : <div>No box</div>}</div>
      </div>
    </div>
  );
}

function Box({ number }) {
  const [random, setRandom] = useState(number);
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return (
    <div style={{ width: "128px", height: "128px", backgroundColor: number !== random ? `rgb(${r}, ${g}, ${b})` : "gray", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }} onClick={() => setRandom(Math.random())}>
      Box #{number}
    </div>
  );
}

export default BoxGeneratorHuy;
