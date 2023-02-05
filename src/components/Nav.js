import React from 'react'
// import {Link} from 'react-router-dom'
import Logo from './../icons_assets/Logo.svg'
// import Home from './../pages/Home';
import './nav.css'

const Nav = () => {
  return (
    <nav className='nav_container'>
       <div className="navbar">
         <img src={Logo} alt="logo" />
        
        <div className='nav_container__links'>
            <ul>
                <li><a href='./../pages/Home.js'>Home</a></li>
                {/* <li><Link to="/">Home</Link></li> */}
                <li><a href='./../pages/About.js'>About</a></li>
                <li> <a href='./../pages/Menu.js'>Menu</a></li>
                <li><a href='./../pages/Reservations.js'>Reservations</a></li>
                <li><a href='./../pages/OrderOnline.js'>Order Online</a></li>
                <li><a href='./../pages/Login.js'>Login</a></li>
            </ul>
        </div>
       </div>
      {/* <Routes>
        <Route path='/' element={<Home />} />
      </Routes> */}
    </nav>
    
  )
}

export default Nav