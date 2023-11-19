import React from 'react'
import SimpleButton from '../SimpleButton'

function TodoForm({ addTodo }) {
  const [name, setName] = React.useState("");

  console.log('TodoForm: ', name)
  return (
    <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> 
      <SimpleButton buttonText="Submit" onClick={() => addTodo(name)} />
    </>
  )
}

export default TodoForm