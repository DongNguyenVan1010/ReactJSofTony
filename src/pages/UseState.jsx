import React from 'react'

// reducer
import { reducer, initialState, showError, showLoading } from '../reducer/todo.reducer';

// lazy initial state
function createInitialTodo() {
  console.log('Passing the initial state directly')
  return [
    {
      id: 1,
      title: 'todo 1'
    },
    {
      id: 2,
      title: 'todo 2'
    }
  ]
}

function UseState() {
  const [{ todo: todoReducer, isLoading, error }, dispatch] = React.useReducer(reducer, initialState);
  const [number, setNumber] = React.useState(0);

  console.log('todo: ', todoReducer)

  // Passing the initial state directly: createInitialTodos() is only used for the initial render, you’re still calling this function on every render
  // const [lazyInitialState, setLazyInitialState] = React.useState(createInitialTodo());
  
  // Passing the initializer function: you’re passing createInitialTodos, which is the function itself. If you pass a function to useState, React will only call it during initialization.
  const [todos, setTodos] = React.useState(createInitialTodo);

  
  const inputRef = React.useRef();
  const [todo, setTodo] = React.useState(["original"]);

  const handleAddTodo = () => {
    const inputEl = inputRef.current; // truong
    const newTodo = [...todo, inputEl.value]; // [orignal, truong]
    setTodo(newTodo);
    normalizeTodo();
    inputEl.value = "";
  };

  const normalizeTodo = () => {
    // Expecting result ["_original", "_truong"]
    // const newTodo = todo.map((todoValue) => `_${todoValue}`);
    // setTodo(newTodo);

    // fixed
    setTodo((prevState) => prevState.map((todoValue) => `_${todoValue}`));
  };

  function handleNumber() {
    setNumber(number + 1); 
    calcNumber(number)
  }

  function calcNumber(count) {
    console.log('calcNumber', count)
    setNumber(count + 2); // 0 + 2 = 2
  }


  return (
    <div>
      <h2>UseState</h2>

      <h3>batching state update</h3>
      {number}
      <button onClick={handleNumber}>Click me</button>

      <h2>updater function</h2>
      <div>
        <ul>
          {todo.map((value, idx) => (
            <li key={idx}>{value}</li>
          ))}
        </ul>
        <input ref={inputRef} placeholder="your todo..." />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  )
}

export default UseState