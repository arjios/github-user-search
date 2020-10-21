import React from 'react';
import './stylesNavbar.css';

const Navbar = () => {
    return(
        <nav className = "navbar-main">
            <div className = "navbar-title">
                <a href="/" className="navbar-text">
                    Bootcamp DevSuperior
                </a>
            </div>
        </nav>
    )
}

export default Navbar;