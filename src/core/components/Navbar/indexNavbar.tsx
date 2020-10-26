import React from 'react';
import { Link } from 'react-router-dom';

import './stylesNavbar.css';

const Navbar = () => {
    return(
        <nav className = "navbar-main">
            <div className = "navbar-title">
                <Link to="/" className="navbar-text">
                    Bootcamp DevSuperior
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;