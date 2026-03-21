import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <div className="imgHolder">
        <img src="https://images.pexels.com/photos/1435075/pexels-photo-1435075.jpeg" alt="" className="img1" />
        <img src="https://images.pexels.com/photos/1668246/pexels-photo-1668246.jpeg" alt="" className="img2" />
        <img src="https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg" alt="" className="img3" />
        <img src="https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg" alt="" className="img4" />
        <img src="https://images.pexels.com/photos/2131614/pexels-photo-2131614.jpeg" alt="" className="img5" />
        <img src="https://images.pexels.com/photos/3131634/pexels-photo-3131634.jpeg" alt="" className="img6" />
        <img src="https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg" alt="" className="img7" />
      </div>

      {/* Calculator */}

      <div className="calculator">
        <div className="num"><h1>505</h1></div>
        <div className="button-section">
          <div className="btn button1">C</div>
          <div className="btn button2">+/-</div>
          <div className="btn button3">%</div>
          <div className="btn button4">/</div>
          <div className="btn button5">7</div>
          <div className="btn button6">8</div>
          <div className="btn button7">9</div>
          <div className="btn button8">X</div>
          <div className="btn button9">4</div>
          <div className="btn button10">5</div>
          <div className="btn button11">6</div>
          <div className="btn button12">-</div>
          <div className="btn button13">1</div>
          <div className="btn button14">2</div>
          <div className="btn button15">3</div>
          <div className="btn button16">+</div>
          <div className="btn button17">0</div>
          <div className="btn button18">,</div>
          <div className="btn button19">=</div>
        </div>
      </div>

      {/* calculator */}
      <input type="number" name="" id="num1" />
      <input type="text" name="" id="operation" />
      <input type="number" name="" id="num2" />
    </>
  )
}


export default App
