import { useState } from 'react'
import './App.css'
import Cors from './cors'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cors />
    </>
  )
}

export default App
