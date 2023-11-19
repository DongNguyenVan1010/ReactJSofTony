import React from 'react';

// reducer
import { reducer, initialState, showError, showLoading, addTodo, hideLoading } from '../reducer/todo.reducer';

function UseReducer() {
  const inputRef = React.useRef();
  // const [todo, setTodo] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState(false);
  // const [error, setError] = React.useState(null);
  const [{ todo, isLoading, error }, dispatch] = React.useReducer(reducer, initialState);

  function handleAddTodo(){
    if(!inputRef.current.value) {
      dispatch(showError(true))
      return; // return early
    }

    const todoItem = {
      id: Date.now(),
      title: inputRef.current.value
    }

    dispatch(showLoading());
    dispatch(addTodo(todoItem))

    setTimeout(() => {
      dispatch(showError(null))
      dispatch(hideLoading());
    }, 300);


    // if(!inputRef.current.value) {
    //   setError(true);
    //   return; // return early
    // }

    // const todoItem = {
    //   id: Date.now(),
    //   title: inputRef.current.value
    // }

    // setIsLoading(true);

    // setTodo(prevState => [...prevState, todoItem]); // add todo, delete todo, update todo

    // setTimeout(() => {
    //   setError(null);
    //   setIsLoading(false);
    // }, 300);

  }

  return (
    <div>
      <h2>UseReducer</h2>
      <input ref={inputRef} placeholder="your todo..." />
      <button onClick={handleAddTodo}>Add</button>
      <br />
      {error && (
        <div style={{ color: "red" }}>Please enter your todo</div>
      )}

      {isLoading ? <>Loading ...</> : (
        <ul>
          {todo.map((value, idx) => (
            <li key={idx}>
              ID: {value.id} - Title: {value.title}
            </li>
          ))}
        </ul>
      )}
      
     
    </div>
  )
}

export default UseReducer