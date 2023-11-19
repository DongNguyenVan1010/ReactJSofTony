import React from 'react'
import SimpleButton from '../SimpleButton'

function TodoItem({ todo, deleteTodo }) {

  return (
    <li>
      {todo.title} <SimpleButton mode="danger" buttonText='Delete' onClick={() => deleteTodo(todo.id)} />
    </li>
  )
}

export default TodoItem