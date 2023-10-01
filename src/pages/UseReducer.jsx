import React from 'react';

// CONSTANTS
const ADD_TODO = 'TODO/ADD_TODO';
const SHOW_LOADING = 'TODO/SHOW_LOADING';
const HIDE_LOADING = 'TODO/HIDE_LOADING';
const SHOW_ERROR = 'TODO/SHOW_ERROR';

// initial state
const initialState = {
  todo: [],
  isLoading: false,
  error: null
}

// action creator
function addTodo(data) {
  return {
    type: ADD_TODO,
    payload: data
  }
}

function showLoading() {
  return {
    type: SHOW_LOADING
  }
}

function hideLoading() {
  return {
    type: HIDE_LOADING
  }
}

function showError(payload) {
  return {
    type: SHOW_ERROR,
    payload
  }
}

// reducer
function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload]
      }
    case SHOW_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case HIDE_LOADING:
      return {
        ...state,
        isLoading: false
      }
    case SHOW_ERROR: {
      return {
        ...state,
        error: action.payload
      }
    }
    default: 
      return state
  }
}

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

    dispatch(showError(null));
    dispatch(showLoading());

    const todo = {
      id: Date.now(),
      title: inputRef.current.value
    }
    dispatch(addTodo(todo))

    setTimeout(() => {
      dispatch(hideLoading());
    }, 300)

    // if(!inputRef.current.value) {
    //   setError(true);
    //   return; // return early
    // }

    // setError(null);
    // setIsLoading(true);
    // const todo = {
    //   id: Date.now(),
    //   title: inputRef.current.value
    // }
    // setTodo(prevState => [...prevState, todo]); // add todo, delete todo, update todo

    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 300)
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