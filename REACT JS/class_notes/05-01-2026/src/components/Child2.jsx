import React from 'react'

export default function Child2() {
    
  function called(){
    console.log("Child2 got re-rendered");
    return <p>Hey called fiucntion got called</p>
  }

  return (
    <>
    <p>Child2 component</p>
    {called()}
    </>
  )
}