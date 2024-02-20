import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'}
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './assets/pages/Home.jsx'
import Login from './assets/pages/Login.jsx'

const router = createBrowserRouter([
  {
    path:'/',
  element:<Home/>
    },
  {
    path:'/login',
    element:<Login/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider route={router} />
  </React.StrictMode>,
)
