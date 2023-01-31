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
              <p className="header_container__text__description">Description</p>
            </div>
            <div className="header_container__image">
              <img src={restaurant} alt="restaurant food" />
            </div>
        </div>

    </header>
  )
}

export default Header