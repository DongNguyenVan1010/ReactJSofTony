import React from 'react'
import SimpleButton from '../components/SimpleButton'

function Form() {
  const refFirstName = React.useRef(10);
  const [country, setCountry] = React.useState(undefined);
  const [form, setForm] = React.useState({
    lastName: 'dan',
    color: 0
  })

  function onSubmit() {
    console.log('onSubmit', {
      refFirstName: refFirstName.current.value,
      form
    })
  }

  function onChangeForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    setForm(prevState => {
      return {
        ...prevState, // copy all properties
        [name]: value
      }
    })
  }

  return (
    <div>
      <h2>Form</h2>

      Uncontroller component: 
      <input defaultValue="tony" ref={refFirstName} type="text" /> <br />
      
      Controller component: 
      <input type="text" name="lastName" value={form.lastName} onChange={onChangeForm} /> <br />

      Error change Uncontroller to Controller: 
      <input value={country} type="text" onChange={e => setCountry(e.target.value)} /> <br />

      Select: <br />
      <select value={form.color} name="color" onChange={onChangeForm}>
        <option value={0}>Red</option>
        <option value={1}>Green</option>
      </select>


      <br />
      <SimpleButton onClick={onSubmit} />
    </div>
  )
}

export default Form