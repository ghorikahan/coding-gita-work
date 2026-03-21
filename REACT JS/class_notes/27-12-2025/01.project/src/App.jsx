import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardHolder from './components/CardHolder.jsx'
import count from './components/count'
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {


  return (
    <>
      {count()}
      <BrowserRouter>
        <Routes>
          <Route path='/card' element={<CardHolder title="card" />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
