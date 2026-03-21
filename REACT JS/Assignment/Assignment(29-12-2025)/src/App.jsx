import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import FoodAPI from "./components/FoodAPI"
import Home from './components/Home'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/FoodAPI" element={<FoodAPI /> }/>
        {/* <Route path="/fake" element={<Fake_storeapi />} /> */}
      </Routes>
    </>
  )
}

export default App