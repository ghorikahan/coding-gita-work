import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (

            <nav>
                <ul>
                    <Link to="/home">Home</Link>
                    <Link to="/movie">Movie</Link>
                    <Link to="/FoodAPI">Food API </Link>
                    <Link to="/Fake_StoreApi">Fake Store API </Link>
                    <Link to="/RecipieApi">Recipe API </Link>
                </ul>
            </nav>
    )
}

export default Navbar
