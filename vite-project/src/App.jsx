import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './pages/Navbar'
import Body from './pages/body'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Navbar />
    <Body />
  </>
  )
}

export default App
