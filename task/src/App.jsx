import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const items = ["oranges", "Apple", "Mango", "Grapes", "Guava", "papaya"];

  const [sort, setSort] = useState("asc");

  const soretedItems = [...items].sort((a, b) => {
    if (sort === "asc") {
      return a.localeCompare(b);
    } else {
      return b.localeCompare(a);
    }
  })


  return (
    <div>
      <h1>dfgh</h1>

      <label>SORT BY :</label>
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>

      <ul>
        {soretedItems.map((ele, index) => (
          <li key={index}>{ele}</li>))}
      </ul>

      <h1>items</h1>

      <ul>
        {items.map((ele, index) => {
          <li key={index}>{ele}</li>
        })}
      </ul>
    </div>
  )

}

export default App
