import Props from "./pages/Props";
import State from "./pages/State";

// react component or function react component
function App() {
  // variables
  const sum = 1 + 2;
  const spreadBook = {
    name: 'one piece',
    price: 20
  }

  // expression
  const expressionJSX = <h1>I love JS {Date.now()}</h1> // JSX

  // JSX
  return (
    // React Fragment
    <> 
      <div>Sum: {sum} </div>
      <br />
      <div>Express: {1 + 22}</div> <br/>
      {expressionJSX}

      {/* element must be closed */}
      <input type="text" />
      <div />


      <Props firstName="tony" lastName="nguyen" age={20} {...spreadBook} />

      <State />
    </>
  )
}

export default App
