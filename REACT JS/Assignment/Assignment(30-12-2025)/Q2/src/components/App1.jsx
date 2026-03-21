import React from 'react'

const App1 = (props) => {
    return (
        <>
            {/* <h1>Student Data</h1> */}
            <div className="student-card">
                <ul>
                    <li>Name is :- {props.Name}</li>
                    <li>Age is :-  {props.Age}</li>
                    <li>Course is :- {props.course}</li>
                    <li>city :-{props.city}</li>
                </ul>
            </div>
        </>
    )
}

export default App1
