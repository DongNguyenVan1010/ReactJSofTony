import React from 'react'
import SimpleButton from '../components/SimpleButton'
import Space from '../components/Space'
import TodoList from '../components/TodoDrillingDrops/TodoList'

function LiftingStateUpDrillng() {
  const [name, setName] = React.useState("");
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      title: "Todo 1",
    },
  ]);

  function addTodo() {
    setName(""); // reset input
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
    <div>
      <h2>LiftingStateUpDrillng</h2>

      <div>
        Add Todo: 
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> 
        <SimpleButton buttonText="Submit" onClick={addTodo} />

        <Space />

        <ul>
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </ul>
        
        
      </div>
    </div>
  )
}

export default LiftingStateUpDrillng