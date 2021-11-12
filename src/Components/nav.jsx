import React from 'react';
import './nav.css';


const Nav = () => {
    return (
        <nav className="menubar">
            <ul className="menu">
                <button className="menuItem">Public Profile</button>
                <button className="menuItem">Account</button>
                <button className="menuItem">Availability</button>
                <button className="menuItem">Support</button>
            </ul>
      </nav>
    )
}

export default Nav
