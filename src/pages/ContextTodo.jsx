import React from 'react'
import SimpleButton from '../components/SimpleButton'
import Space from '../components/Space'
import TodoList from '../components/contextTodo/TodoList'
import TodoForm from '../components/contextTodo/TodoForm'

function LiftingStateUpPattern() {
  return (
    <div>
      <h2>ContextTodo</h2>

      <div>
        Add Todo: 

        <TodoForm />

        <Space />

        <ul>
          <TodoList />
        </ul>
        
        
      </div>
    </div>
  )
}

export default LiftingStateUpPattern