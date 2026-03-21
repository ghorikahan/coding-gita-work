import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import App1 from './components/App1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Student Data</h1>
      <div className="student_list">
        <App1 Name="Ghori kahan N" Age="18" course="CSE" city="Bhavnagar" />
        <App1 Name="Vacchani Tapan N" Age="18" course="CSE" city="Bhavnagar" />
        <App1 Name="Patel Jivan " Age="18" course="CSE" city="Bhavnagar" />
        <App1 Name="Parv Suhagiya K" Age="18" course="CSE" city="Bhavnagar" />
      </div>
    </>
  )
}

export default App
