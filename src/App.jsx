import React from "react";

import Props from "./pages/Props";
import State from "./pages/State";
import Component from "./pages/Component";
import ComposeComponent from "./pages/ComposeComponent";
import ConditionalRendering from "./pages/ConditionalRendering";
import ListKeys from "./pages/ListKeys";
import GenerateBoxKhuong from "./pages/GenerateBoxKhuong";
import BoxGeneratorHuy from "./pages/BoxGeneratorHuy";
import LiftingStateUpDrillng from "./pages/LiftingStateUpDrillng";
import LiftingStateUpPattern from "./pages/LiftingStateUpPattern";
import Form from "./pages/Form";
import UseState from "./pages/UseState";
import UseReducer from "./pages/UseReducer";
import BoxesContainer from "./pages/BoxColorHuy";

// react component or function react component
function App() {
  // states
  const [forceUpdate, setForceUpdate] = React.useState(Date.now()); // local variable
  // variables
  const sum = 1 + 2;
  const spreadBook = {
    name: "one piece",
    price: 20,
  };

  // expression
  const expressionJSX = <h1>I love JS {Date.now()}</h1>; // JSX

  // JSX
  return (
    // React Fragment
    <>
      <div>Sum: {sum} </div>
      <br />
      Plus: {forceUpdate}
      <button
        type="button"
        onClick={() => {
          setForceUpdate(Date.now());
        }}
      >
        Force Update
      </button>{" "}
      <br />
      <div>Express: {1 + 22}</div> <br />
      {expressionJSX}
      {/* element must be closed */}
      <input type="text" />
      <div />
      <Props firstName="tony" lastName="nguyen" age={20} {...spreadBook} />
      <State key={forceUpdate} />
      <Component />
      <ComposeComponent />
      <ConditionalRendering />
      <ListKeys />
      <GenerateBoxKhuong />
      <BoxGeneratorHuy />
      <LiftingStateUpDrillng />
      <LiftingStateUpPattern />
      <Form />
      <UseState />
      <UseReducer />
      <BoxesContainer />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
