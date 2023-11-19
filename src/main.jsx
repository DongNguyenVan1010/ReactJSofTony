import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { TodoProvider } from './context/TodoContext.jsx'
import { store } from './store.js';
import { Provider } from 'react-redux'

// libs
// import { initialRequest } from './services/axiosInstance.js'
// initialRequest(store);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <TodoProvider>
        <App />
      </TodoProvider>
    </BrowserRouter>
  </Provider>
 
 
)
