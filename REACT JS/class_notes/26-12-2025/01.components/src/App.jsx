import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainnav from './components/main-nav'
import card1 from './components/card-1'
import Card1 from './components/card-1'

function App() {
 
  return (
    <>
      <Mainnav />
      <Card1 title = "This is done using props" url="https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg" description="hello everyone" />
      
    </>
  )
}

export default App
