import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import BottomMenu from '../components/BottomMenu/BottomMenu';
import './home.scss'
import Formik from '../components/Formik';


const Home = () => {
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
      <div style={{ height: '1200px' }}>
        <Formik />
      </div>
    </div>
  );
}

export default Home;
