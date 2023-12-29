import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { NavLink } from 'react-router-dom';
import './bottomMenu.scss'

export default function BottomMenu() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className='menuBox'>
            <nav id='miniMenu'>
                <NavLink to={'/'} onClick={scrollToTop}>
                    <HomeIcon className='iconMiniMenu' />
                </NavLink>
                <MoreVertIcon className='iconVertical' />
                <NavLink to={'/about'} onClick={scrollToTop}>
                    <InfoIcon className='iconMiniMenu' />
                </NavLink>
                <MoreVertIcon className='iconVertical' />
                <NavLink to={'/projects'} onClick={scrollToTop}>
                    <AccountTreeIcon className='iconMiniMenu' />
                </NavLink>
            </nav>
        </div>
    )
}
