import React from 'react'

function EffectHook() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    console.log('useEffect with empty dependency')

    // chains promises -> get value of promise -> .then()
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10&_page=1')
      .then(resp => resp.json())
      .then(data => {
        setTodos(data);
      })
      return () => {
        console.log('clean up useEffect with empty dependency')
      }
  }, []); // run once when component mount

  React.useEffect(() => {
    console.log('useEffect with no dependency');
    return () => {
      console.log('clean up useEffect with no dependency')
    }
  })

  React.useEffect(() => {
    console.log('useEffect with dependency: ', todos)
    return () => {
      console.log('clean up useEffect with dependency')
    }
  }, [todos]) // run when todos change

  
  console.log('---------------')
  console.log('render')
  console.log('todos: ', todos)

  return (
    <div>
      <h2>UseEffect & UselayoutEffect</h2>
    </div>
  )
}

export default EffectHook