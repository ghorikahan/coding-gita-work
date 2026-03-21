import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const company = ["Amazon","Google","Apple"];

  return (
    <div>
      <ol>
        {company.map((ele)=>{
          return <li>{ele}</li>
        })}
      </ol>
    </div>
  )
}

export default App
