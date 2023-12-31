import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import BottomMenu from '../components/BottomMenu/BottomMenu';

export default function Projects() {
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
        <div id='home'>
            <Navbar />
            {menu && <BottomMenu />}
            <div style={{height: '1200px'}}></div>
        </div>
  )
}
