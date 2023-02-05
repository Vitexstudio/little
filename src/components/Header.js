import React from 'react'
import restaurant from './../icons_assets/restauranfood.jpg';
import './header.css'


const Header = () => {
  return (
    <header>
        <div className="header_container">
            <div className="header_container__text">
              <h1 className="header_container__text__title">Little Lemon</h1>
              <h2 className="header_container__text__subtitle">Chicago</h2>
              <p className="header_container__text__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <button className="reserve-a-table"><span>Reserve a Table</span></button>
            </div>
            <div className="header_container__image">
              <img src={restaurant} alt="restaurant food" />
            </div>
        </div>

    </header>
  )
}

export default Header