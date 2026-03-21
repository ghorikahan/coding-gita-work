import React, { useState, useCallback } from 'react'
import Child1 from './components/Child1.jsx'
export default function App() {
  var [value, setValue] = useState(0);
  var [count, setCount] = useState(0);

  const handle1 = useCallback(() => {
    console.log("parent function got re-rendered");
    return <p>Fucntion reference got chnage</p>
  }, [value]);

  return (
    <>
      <p>Value: {value}</p>
      <p>Count: {count}</p>
      <button onClick={() => setValue(++value)}>Click Value</button>
      <button onClick={() => setCount(++count)}>Click Count</button>
      <Child1 fun={handle1} />
    </>
  )
}