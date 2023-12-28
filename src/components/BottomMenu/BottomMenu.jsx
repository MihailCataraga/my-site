import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { NavLink } from 'react-router-dom';
import './bottomMenu.scss'

export default function BottomMenu() {
  return (
    <div className='menuBox'>
        <nav id='miniMenu'>
            <NavLink to={'/'}>
                <HomeIcon className='iconMiniMenu' />
            </NavLink>
            <MoreVertIcon className='iconVertical' />
            <NavLink to={'/about'}>
                <InfoIcon className='iconMiniMenu' />
            </NavLink>
            <MoreVertIcon className='iconVertical' />
            <NavLink to={'/projects'}>
                <AccountTreeIcon className='iconMiniMenu' />
            </NavLink>
        </nav>
    </div>
  )
}
