import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="maincontent">


        <div className="card">
          <img src="https://raw.githubusercontent.com/ghorikahan/CGxSU_Semester_1/refs/heads/main/react/00.frontend_task/03.superwars/super-1.png" alt="img" />
          <h3>spiderman</h3>
          <h1>12</h1>
        </div>

        <div className="card">
          <img src="https://raw.githubusercontent.com/ghorikahan/CGxSU_Semester_1/refs/heads/main/react/00.frontend_task/03.superwars/super-3.png" alt="img" />
          <h3>wonder Women</h3>
          <h1>30</h1>
        </div>


        <div className="score"><h1>5-0</h1></div>


        <div className="card">
          <img src="https://raw.githubusercontent.com/ghorikahan/CGxSU_Semester_1/refs/heads/main/react/00.frontend_task/03.superwars/super-2.png" alt="img" />
          <h3>captian America</h3>
          <h1>50</h1></div>
        <div className="card">
          <img src="https://raw.githubusercontent.com/ghorikahan/CGxSU_Semester_1/refs/heads/main/react/00.frontend_task/03.superwars/super-4.png" alt="img" />
          <h3>Gem Women</h3>
          <h1>12</h1>
        </div>

      </div>
    </>
  )
}

export default App
