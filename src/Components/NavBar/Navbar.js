import './navbar.css'

import {Link}from 'react-router-dom'

const navbar = () => {
    return (
        <nav className="nav-bar">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/work">Work</Link>
            <Link className="link" to="/contact">Contact</Link>
        </nav>
    )
}

export default navbar
