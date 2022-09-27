import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Index from './pages/Index'
import Content from './pages/Content'
import DefaultLayout from './components/DefaultLayout'

function App() {
  const [count, setCount] = useState(0) 

  return (
  <>
    <Index />
    {/* <Content /> */}
  </>
  )
}

export default App
