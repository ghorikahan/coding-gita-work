import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  var fruits = ["apple", "banana", "strawberry"];

  function arrayElement() {
    fruits.map((elm,index) => {
      console.log(fruits[index]);
    })
  }

  
  return (
    <>
      <button type="button" onClick={arrayElement}>button</button>
    </>
  )
}

export default App
