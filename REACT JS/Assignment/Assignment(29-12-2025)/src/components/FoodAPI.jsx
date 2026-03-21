import React, { useEffect, useState } from 'react'

const FoodAPI = () => {
    var [meal, setMeal] = useState([]);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
    }, []);


    return (
        <>
            <div className="main-card">
                <div className="card">
                    <h1>{meal.strMeal}</h1>
                </div>
                <div className="card">
                    <h1>{meal.strMeal}</h1>

                </div>
                <div className="card">
                    <h1>{meal.strMeal}</h1>

                </div>
            </div>
        </>
    )
}

export default FoodAPI