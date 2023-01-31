import React from 'react'
import Logo from './../icons_assets/Logo.svg'
import './nav.css'

const Nav = () => {
  return (
    <nav className='nav_container'>
        <img src={Logo} alt="logo" />
        
        <div className='nav_container__links'>
            <ul>
                <li><a href='./../pages/Home.js'>Home</a></li>
                <li><a href='./../pages/About.js'>About</a></li>
                <li> <a href='./../pages/Menu.js'>Menu</a></li>
                <li><a href='./../pages/Reservations.js'>Reservations</a></li>
                <li><a href='./../pages/OrderOnline.js'>Order Online</a></li>
                <li><a href='./../pages/Login.js'>Login</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav