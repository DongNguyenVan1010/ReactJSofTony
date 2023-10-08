import React from 'react';

const TodoContext = React.createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = React.useState([]);
  const [count, setCount] = React.useState(0);

  function addTodo(name) {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      title: name,
    };

    setTodos([...todos, newTodo]); // push item in array
  }

  function deleteTodo(todoId) {
    // const newTodos = todos.filter((todo) => todo.id !== todoId);
    // setTodos(newTodos);

    setTodos((prevState) => {
      const newTodos = prevState.filter((todo) => todo.id !== todoId)
      return newTodos
    })
  }


  return (
    <TodoContext.Provider 
      value={{
        // states
        todos,
        count,
        // actions
        addTodo,
        deleteTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export const useTodoContext = () => React.useContext(TodoContext);