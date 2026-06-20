import './App.css'
import logo from './assets/images/logo.svg'
import menuIcon from './assets/images/icon-menu.svg'
import Section1 from './sections/Section1/Section1'

export default function App() {
  return (
    <div className="homepage-master-container">
      <div className="header">
        <img src={logo} alt="News Company Logo" className='logo'/>
        <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
      </div>
      <div className="body-container">
        <div className="section1"><Section1/></div>
        <div className="section2">
          section2
        </div>
        <div className="section3">section3</div>
      </div>
    </div>
  )
}