import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const[menu, setMenu] = useState(true);
    return (
        <div className='navbar'>
            <div className='logo'>
                <NavLink to={'/'}>
                    <h1>MC<span>site</span></h1>
                </NavLink>
            </div>
            <nav id='clasicMenu'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About Me</NavLink>
                <NavLink to={'/projects'}>Projects</NavLink>
            </nav>
            {menu ? 
                <MenuIcon onClick={() => setMenu(!menu)} className='menuIcon' /> :
                <>
                    <CloseIcon onClick={() => setMenu(!menu)} className='menuIcon' />
                    <nav id='miniMenu'>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/about'}>About My</NavLink>
                        <NavLink to={'/projects'}>Projects</NavLink>
                    </nav> 
                </>
            }
        </div>
        
    );
}

export default Navbar;
