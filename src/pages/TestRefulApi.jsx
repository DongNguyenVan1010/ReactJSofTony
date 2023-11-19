import React from 'react'

import { axiosInstance } from '../services/axiosInstance';

function TestRefulApi() {
  const [isLoading, setIsLoading] = React.useState(false)


  function login() {
    axiosInstance('/user/signin', {
      method: 'POST',
      data: {
        "data": {
          "email": "truong@gmail.com",
          "password": "123456"
        }
      }
    })
    .then(res => {
      window.localStorage.setItem('access_token', res.data.data.access_token);
      window.localStorage.setItem('refresh_token', res.data.data.refresh_token);
    })
  }

  function handGetApi() {
    setIsLoading(true)
    axiosInstance('/user?page=1&limit=10', {
      method: 'GET',
      showLoading: true
    })
    .then(res => {
      setTimeout(() => {
        console.log(res)
        setIsLoading(false)
      }, 1000)
    })
  }
  return (
    <div>
      {isLoading && <h1>Loading...</h1>}

      <button type="button" onClick={login}>Login</button>
      <button type="button" onClick={handGetApi}>Get API</button>

    </div>
  )
}

export default TestRefulApi