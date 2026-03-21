import React, { useState } from 'react'

const count = () => {
    var [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1);
    }
    function decreaseCount() {
        setCount(count - 1);
    }
    function reset() {
        setCount(0);
    }

    return (
        <>
            <h1>{count}</h1>
            <div className="btns">
                <button type="button" onClick={increaseCount}>increase</button>
                <button type="button" onClick={reset}>reset</button>
                <button type="button" onClick={decreaseCount}>decrease</button>
            </div>
        </>
    )
}

export default count
