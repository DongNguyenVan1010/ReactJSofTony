import React from 'react'
import SimpleButton from '../components/SimpleButton';

function ConditionalRendering() {
  const [isAuth, setIsAuth] = React.useState(false);
  const [todos, setTodos] = React.useState([
    {
      title: 'javascript'
    },
    {
      title: 'javascript'
    }
  ])
  let renderButon = <div>Please login</div>;
  if(isAuth) {
    renderButon = <div>Please logout</div>
  } 

  // function render
  // function renderButtonByFuncton() {
  //   // codelogic
  //   return (
  //     <div>Render button by function</div>
  //   )
  // }
  const renderButtonByFuncton = () => <div>Render button by function</div>;

  const todosMaper = todos.map((item, index) => {
    return {
      id: `${item.title}-${index}`,
      ...item
    }
  })

  function handleToggleAuth() {
    setIsAuth(prevState => !prevState);
  }

  return (
    <div>
      <h3>ConditionalRendering</h3>

      <SimpleButton buttonText="Login" onClick={handleToggleAuth}/>

      <br /> <br />

      {todosMaper.length > 0 ? todos.map((todo) => (
        <div key={todo.id}>
          Title: {todo.title}
        </div>
      )) : (
        <>Loading ...</>
      )}

      <h4>Element Variable</h4>
      {renderButon}

      <h4>Function render</h4>
      {renderButtonByFuncton()}
    </div>
  )
}

export default ConditionalRendering
