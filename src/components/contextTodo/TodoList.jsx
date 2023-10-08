import React from 'react'

import TodoItem from './TodoItem';

import { useTodoContext } from '../../context/TodoContext';

function TodoList() {
  const { todos } = useTodoContext();
  return (
    <>
      {todos.map(todo => {
        return (
          <TodoItem key={todo.id} todo={todo}  />
        )
      })}
    </>
  )
}

export default TodoList