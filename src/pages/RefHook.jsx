import React from 'react'

function RefHook() {
  // let refList = React.useRef(() => 1);
  const [count, setCount] = React.useState(0);
  const [, setForceUpdate] = React.useState(Date.now());
  const refCount = React.useRef(0); // keep data between renders component
  const refInput = React.useRef(null);

  function handleForceUpdate() {
    setForceUpdate(Date.now());
    setCount(prev => prev + 10);
  }

  function handleReset(){
    setCount(refCount.current)
  }

  React.useEffect(() => {
    if(count === 50) {
      refCount.current = count;
    }
  }, [count])

  function handleFocus() {
    refInput.current.focus();
  }

  function handleEdit() {
    refInput.current.focus(); // focus text
    const lenght = refInput.current.value.length;
    refInput.current.setSelectionRange(0, lenght); // select text:  truong course
  }

  return (
    <div>
      <h2>Ref Hook</h2> <br />
      Count: {count}

      <button type="button" onClick={handleForceUpdate}>Force Update</button>
      <button type="button" onClick={handleReset}> Reset </button>

      <br />

      <input ref={refInput} type="text" />
      <button type="button" onClick={handleFocus}>Focus</button>
      <button type="button" onClick={handleEdit}>Edit</button>
    </div>
  )
}

export default RefHook;
