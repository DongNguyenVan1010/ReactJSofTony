import React from "react";
import { Link, NavLink, Routes, Route } from "react-router-dom";

// pages
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
import UseReducer from './pages/UseReducer';
import EffectHook from './pages/EffectHook';
import ContextTodo from './pages/ContextTodo';
import RefHook from "./pages/RefHook";
import BoxesContainer from "./pages/BoxColorHuy";
import PerformanceHook from './pages/PerformanceHook'
import User from "./pages/account/User";
import Profile from "./pages/account/Profile";
import Bio from "./pages/account/Bio";
import Invoice from "./pages/account/Invoice";
import UserDetail from "./pages/account/UserDetail";
import TestRefulApi from "./pages/TestRefulApi";

// react component or function react component
function App() {
  // states
  const [forceUpdate, setForceUpdate] = React.useState(0); // local variable
  // variables
  const sum = 1 + 2;
  const spreadBook = {
    name: "one piece",
    price: 20,
  };
  const [author, setAuthor] = React.useState({
    name: "tony",
    age: 20,
  });

  // expression
  const expressionJSX = <h1>I love JS {Date.now()}</h1>; // JSX

  const handleDeleteAuthor = React.useCallback(() => {
    console.log('handleDeleteAuthor', forceUpdate)
      // code logic
      //aadsa
  }, [forceUpdate]);

  const todos = []

  const resCount = React.useMemo(() => {
    return todos.filter(todo => todo.completed).length
  }, [todos]); // 100

  console.log('forceUpdate: ', forceUpdate, resCount)

  // JSX
  return (
    // React Fragment
    <>
      <ul>
        <li><Link to="state">State</Link></li>
        <li>
          <NavLink 
            to="props" 
            className={value => {
              return `menu-item-${value.isActive ? 'selected' : 'unselected'}`
            }}
          >
            Props
          </NavLink>
         </li>
         <li><Link to="user">User</Link></li>
         <li><Link to="test-reful-api">test-reful-api</Link></li>
      </ul>

      <main>
        <Routes>
          <Route
            path="/props" 
            element={<Props firstName="tony" lastName="nguyen" age={20} {...spreadBook} />} 
          />
          <Route
            path="/state" 
            element={ <State key={forceUpdate} />} 
          />
          <Route
            path="/user" 
            element={<User />} 
          >
            <Route path="profile" element={<Profile />} />
            <Route path="bio" element={<Bio />} />
            <Route path="invoice" element={<Invoice />} />
            {/* <Route path=":userId" element={<UserDetail />} /> */}
          </Route>
          <Route path="user/:userId/product/:productId" element={<UserDetail />} />
          <Route path="test-reful-api" element={<TestRefulApi />} />
          {/* <Route
            path="/user/profile" 
            element={<Profile />} 
          />
          <Route
            path="/user/bio" 
            element={<Bio />} 
          />
          <Route
            path="/user/profile" 
            element={<Profile />} 
          />
          <Route
            path="/user/invoice" 
            element={<Invoice />} 
          /> */}


        </Routes>
      </main>

      <hr />

      ResCount: {resCount}
      <div>Sum: {sum} </div>
      <br />
      Plus: {forceUpdate}
      <button
        type="button"
        onClick={() => {
          setForceUpdate(prevState => prevState + 1);
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
     
     
      <Component />
      <ComposeComponent />
      <ConditionalRendering />
      <ListKeys />
      <GenerateBoxKhuong />
      <BoxGeneratorHuy />
      <LiftingStateUpDrillng />
      <LiftingStateUpPattern />
      <Form />


     <EffectHook />
     
     <ContextTodo />

     <RefHook />





      <UseState />
      <UseReducer />
      <BoxesContainer />


      <button
        type="button"
        onClick={() => {
         setAuthor({
            ...author,
            name: `title ${Date.now()}`
            // age: 21,
         })
        }}
      >
       Update Author
      </button>{" "}

      <PerformanceHook 
        name={author.name} 
        age={author.age} 
        handleDeleteAuthor={handleDeleteAuthor} 
      />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
