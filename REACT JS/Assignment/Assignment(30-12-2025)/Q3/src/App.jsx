import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount(count+1);
  }
  function decreaseCount(){
    setCount(count-1);
  }

  return (
    <>
      <div className="click-counter">
        <h1>{count}</h1>
        <div className="btn">
          <div className="inc-btn" onClick={increaseCount}>Increase</div>
          <div className="dec-btn" onClick={decreaseCount}>Decrease</div>
        </div>
      </div>
    </>
  )
}

export default App
