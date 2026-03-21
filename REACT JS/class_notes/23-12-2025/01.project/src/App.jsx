import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="navbar">
      <div className="logo">
        <h1>MYLOGO</h1>
      </div>
      <div className="link">
        <p>Home</p>
        <p>About Us</p>
        <p>Contact</p>
      </div>
      <div className="menubar">
        <p className="bar1"></p>
        <p className="bar1"></p>
        <p className="bar1"></p>
      </div>
    </div>
    <div className="maincontent">
      <div className="card-1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-0tkxAziZUn9x9th8FRvztBQBFxXKTOHvg&s" alt="img" />
        <h2>Game Developer</h2>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deleniti sapiente sequi voluptas sunt, assumenda libero similique ex nam laudantium, quibusdam non laboriosam!</p>
        <button type="button">View Resume</button>
      </div>
      <div className="card-2">
        <img src="https://headshots-inc.com/wp-content/uploads/2023/02/Professional-Headshot-Photography-Example-1.jpg" alt="img" />
        <h2>App Developer</h2>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deleniti sapiente sequi voluptas sunt, assumenda libero similique ex nam laudantium, quibusdam non laboriosam!</p>
        <button type="button">View Resume</button>
      </div>
    </div>
    </>
  )
}

export default App
