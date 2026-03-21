import { useState, useEffect } from "react"

const Cors = () => {
    const [first, setFirst] = useState(0);
    useEffect(() =>{
        fetch("http://localhost:5000/all")
        .then(res => res.json())
        .then(data => setFirst(data.length))
    })
    const hangles = () => {
        fetch("http://localhost:5000/all")
        .then(res => res.json())
        .then(data => setFirst(data.length))
    }
  return (
    <div>
      <button onClick={hangles}>click Me ({first})</button>
    </div>
  )
}

export default Cors