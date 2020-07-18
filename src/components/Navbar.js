import React from 'react';
import './Navbar.css'

const Header = () => {
    return(
        
        <div className="ui secondary  menu">
            <a href={'./Main.js'} className="active item">
                Home
            </a>
            <a className="item items">
                About
            </a>
            <a className="item items">
                Contact
            </a>
        </div>
    )
    
}


export default Header;