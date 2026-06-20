import { useState } from 'react'

import './App.css'
import logo from './assets/images/logo.svg'
import menuIcon from './assets/images/icon-menu.svg'
import closeBtn from './assets/images/icon-menu-close.svg'

import SideNav from './sections/PopUpMenu/sideNav'
import NavBar from './sections/NavBar/NavBar'
import Section1 from './sections/Section1/Section1'
import Section2 from './sections/Section2/Section2'
import Section3 from './sections/Section3/Section3'

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="homepage-master-container">

      <div className="header">
        <img src={logo} alt="News Company Logo" className='logo'/>
        <button onClick={() => setIsVisible(!isVisible)}>
          <img src={isVisible ? closeBtn : menuIcon} alt="Menu Icon" className="menu-icon" />
        </button>
        <div className="navBar-container"><NavBar /></div>
      </div>

      {isVisible && (
        <>
          <div className="overlay" onClick={() => setIsVisible(false)}></div>
          <div className='sidenav-container'><SideNav /></div>
        </>
      )}
      
      <div className="body-container">
        <div className="section1"><Section1/></div>
        <div className="section2"><Section2/></div>
        <div className="section3"><Section3/></div>
      </div>
    </div>
  )
}