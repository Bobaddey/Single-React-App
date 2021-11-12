import React from 'react';
import './nav.css';

const style ={
    // backgroundColor: "rgb(24, 117, 145)",
    padding: "20px 60px",
    fontSize: "20px",
    borderRadius: "10px",
    fontFamily: 'Ubuntu',
    color: "rgb(24, 117, 145)",
   border: "none",
   marginRight: "15px"
}
const Nav = () => {
    return (
        <nav className="menubar">
            <ul className="">
                <li style={{}} style={style} className="menuItem">Public Profile</li>
                <li style={style} className="menuItem">Account</li>
                <li style={style} className="menuItem">Availability</li>
                <li style={style} className="menuItem">Support </li>
            </ul>
      </nav>
    )
}

export default Nav
