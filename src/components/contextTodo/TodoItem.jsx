import React from 'react'
import SimpleButton from '../SimpleButton'

import { useTodoContext } from '../../context/TodoContext';

function TodoItem({ todo }) {
  const { deleteTodo } = useTodoContext();

  return (
    <li>
      {todo.title} <SimpleButton mode="danger" buttonText='Delete' onClick={() => deleteTodo(todo.id)} />
    </li>
  )
}

export default TodoItem