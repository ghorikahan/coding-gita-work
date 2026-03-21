import { useState } from 'react'
import './App.css'
import { useRef } from 'react';

function App() {
  // var [count, setCount] = useState(0);
  // let value = useRef(0);
  // value.current = value.current + 1;
  let color = useRef(); 
  function colorUpdate() {
    console.log(color.current);
    color.current.style.color = "red";
  }
  return (
    <>
      <p ref={color}>Hello</p>
      <button onClick={colorUpdate}>Click Me!</button>
      {/* <p>value: {value.current}</p>
      <p>Count : {count}</p>
      <button onClick={() => { setCount(++count) }}>Click Me!</button> */}
    </>
  )
}

export default App
