import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='main-navbar'>
            <h1>My Logo</h1>
            <div className='navbar-api'>
                <Link to="/API1">API1</Link>
                <Link to="/API2">API2</Link>
            </div>
        </div>
    )
}

export default Navbar
