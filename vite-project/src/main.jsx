import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Content from './pages/Content'


const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: '/Navbar', element: <Navbar />},
  {path: '/Content', element: <Content />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router}/>
  </React.StrictMode>
)
