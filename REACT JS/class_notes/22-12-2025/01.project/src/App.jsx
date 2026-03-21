import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <p style={
          {
            border: "2px solid black",
            backgroundColor: "black",
            color: "white"
          }
        }>Hello world</p>
        <h1>This is made using heading keyword  </h1>

        <img src={reactLogo} alt=""/>
      </div>

      <div>
        <p class="para">This is written using react js </p>
      </div>
    </>
  )
}

export default App