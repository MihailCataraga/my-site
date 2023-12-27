import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <NavLink to={'/'}>
                    <h1>MC</h1>
                </NavLink>
            </div>
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About My</NavLink>
                <NavLink to={'/projects'}>Projects</NavLink>
            </nav> 
        </div>
        
    );
}

export default Navbar;
