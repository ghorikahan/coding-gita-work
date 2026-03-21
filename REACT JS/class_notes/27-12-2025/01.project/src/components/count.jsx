import{ useEffect, useState } from 'react'

function count() {
    var [count, increaseCount] = useState(0);
    function displayCount(){
        increaseCount(++count);
    }
    useEffect(()=>{
        fetch("https://api.mfapi.in/mf")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
        })
    },);   // here [] is the dependency.whenever the dependency changes it means the state changes, so the piece of code inside the callback function will run..

    return (
        <>
            <p>count:- {count} </p>
            <button type="button" onClick = {displayCount}>Click me!</button>
        </>
    )
}

export default count
