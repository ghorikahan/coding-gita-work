import React from 'react'
import Child2 from "./Child2.jsx"

const Child1 = React.memo(
    (props) => {

        function handle() {
            console.log(`Child1 function got re-render:  ${props.value}`);
            return <p>Handle Function is called</p>
        }

        

        return (
            <p>
                <button onClick={colorChange}> Click Me! </button>
                <p>Child1 Component</p>
                {handle()}
                <Child2 />
            </p>
        )
    }
)

export default Child1