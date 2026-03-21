import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './components/count.jsx'
import Toggle from './components/toggle.jsx'
import Input from './components/input.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Ghori kahan N</h1>
      <Count />
      {/* <Toggle /> */}
      <Input />
    </>
  )
}

export default App
