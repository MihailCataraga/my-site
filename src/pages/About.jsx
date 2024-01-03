import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import BottomMenu from '../components/BottomMenu/BottomMenu';
import Photo from '../assets/man.avif';
import './about.scss';
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiReactrouter, SiRedux } from "react-icons/si";

export default function About() {
  const [menu, setMenu] = useState(false)

  //Scroll and see <BottomMenu />
  window.addEventListener("scroll", scrollFunction);
  function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
      setMenu(true)
    } else {
      setMenu(false)
    }
  }
  return (
    <div id='about'>
      <Navbar />
      {menu && <BottomMenu />}
      <div className='aboutBox'>
        <h1>More information about me</h1>
        <div className='aboutContent'>
          <div className='leftContent'>
            <img src={Photo} alt='Profile img' />
            <h3>Skills:</h3>
            
          </div>
          <div className='rightContent'>
            <h2>Studies:</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
