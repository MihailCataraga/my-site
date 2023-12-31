import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import BottomMenu from '../components/BottomMenu/BottomMenu';

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
    <div id='home'>
      <Navbar />
      {menu && <BottomMenu />}
      <div className='aboutContent'>
        <h1>More information about me</h1>
        <div>
          <div>
            <img alt='Profile img' />
            <h3>Skills:</h3>
            
          </div>
          <div>
            <h2>Studies:</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
