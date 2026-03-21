import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="number"> <h1>7788</h1></div>
        <div className="buttons">
          <div className="col-1">
            <div className="light-grey-circle">C</div>
            <div className="grey-circle">7</div>
            <div className="grey-circle">4</div>
            <div className="grey-circle">1</div>
          </div>
          <div className="col-2">
            <div className="light-grey-circle">+/-</div>
            <div className="grey-circle">8</div>
            <div className="grey-circle">5</div>
            <div className="grey-circle">2</div>
            <div className="zero">0</div>
          </div>
          <div className="col-3">
            <div className="light-grey-circle">%</div>
            <div className="grey-circle">9</div>
            <div className="grey-circle">6</div>
            <div className="grey-circle">3</div>
            <div className="grey-circle">,</div>
          </div>
          <div className="col-4">
            <div className="orange-circle">/</div>
            <div className="orange-circle">X</div>
            <div className="orange-circle">-</div>
            <div className="orange-circle">+</div>
            <div className="orange-circle">=</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
