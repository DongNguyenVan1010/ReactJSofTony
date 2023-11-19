import { useState } from "react";
import BoxSimple from '../components/Box/BoxSimple'

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
          <input 
            type="number" 
            min={1} 
            max={128} 
            name="boxNumber" 
            id="boxNumber" 
            value={formValue} 
            onChange={event => setFormValue(event.target.valueAsNumber)} 
          />
          <button type="submit">Generate</button>
        </form>

        <div 
          style={{ 
            width: "100%", 
            height: "1px", 
            backgroundColor: "gray", 
            marginTop: "20px", 
            marginBottom: "20px" 
          }}
        />

        <div 
          style={{ 
            display: "flex", 
            flexWrap: "wrap",
            maxWidth: "512px",
            gap: "16px" 
          }}>
            {boxNumber > 0 ? (
              <>
                {Array.from({ length: boxNumber }).map((_, index) => {
                  return (
                    <BoxSimple key={index} number={index + 1} />
                  )
                })}
              </>
            ) : (
              <div>No box</div>
            )}
          </div>
      </div>
    </div>
  );
}

export default BoxGeneratorHuy;
