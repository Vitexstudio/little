import React from 'react'
import salad from './../icons_assets/greek salad.jpg'
import brochetta from './../icons_assets/Tomato_Bruschetta.jpg'
import dessert from './../icons_assets/lemon dessert.jpg'
import delivery from './../icons_assets/delivery-icon-9.jpg'
import portrait1 from './../icons_assets/portrait 1.jpg'
import portrait2 from './../icons_assets/portrait 2.jpeg'
import portrait3 from './../icons_assets/portrait 3.jpeg'
import portrait4 from './../icons_assets/portrait 4.jpeg'
import aboutImage1 from './../icons_assets/Mario and Adrian A.jpg'
import aboutImage2 from './../icons_assets/Mario and Adrian b.jpg'

import './main.css'

const Main = () => {
  return (
    <main>
        <div className="main_highlights">
          <div className="weekly-special__online-menu">
              <div className="weeks-special">
              <h1>This week's Special</h1>
            </div>

            
              <btn className="online-menu"><span>Online Menu</span></btn>
              
            
            </div>
          <div className="main_highlights__container">
            
            
            
              <div className="main_highlights__container__dishes">
                <img src={salad} alt="salad" />
                <div className="price-list">Greek Salad <span>$12</span></div>
                <div className="order-text">orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</div>
                <div className="order-delivery">
                  <p>Order Delivery</p>
                  <img src={delivery} alt="delivery van" />
                </div>
              </div>
              <div className="main_highlights__container__dishes">
                <img src={brochetta} alt="brochetta" />
                <div className="price-list">Bruchetta<span>$14</span></div>
                <div className="order-text">orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</div>
                <div className="order-delivery">
                  <p>Order Delivery</p>
                  <img src={delivery} alt="delivery van" />
                </div>
              </div>
              <div className="main_highlights__container__dishes">
                <img src={dessert} alt="dessert" />
                <div className="price-lis">Lemon Dessert<span>$15</span></div>
                <div className="order-text">orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</div>
                <div className="order-delivery">
                  <p>Order Delivery</p>
                  <img src={delivery} alt="delivery van" />
                </div>
              </div>
            
          </div>
        </div>
        <div className="main_testimonials">
          <h2>Testimonials</h2>
        <div className="main_testimonials__ratings-container">
          <div className="main_testimonials__ratings-container__rating1">
            <h4>Rating</h4>
            <div className='portrait-and-name'>
              <img src={portrait1} alt="portrait 1" />
              <p>Name:</p>
            </div>
            <p>Review text:</p>
          </div>
          <div className="main_testimonials__ratings-container__rating2">
            <h4>Rating</h4>
            <div className='portrait-and-name'>
            <img src={portrait2} alt="portrait 2" />
            <p className='portrait-name'>Name</p>
            </div>
            <p>Review text:</p>
          </div>
          <div className="main_testimonials__ratings-container__rating3">
            <h4>Rating</h4>
            <div className='portrait-and-name'>
            <img src={portrait3} alt="portrait 3" />
            <p>Name</p>
            </div>
            <p>Review text:</p>
          </div>
          <div className="main_testimonials__ratings-container__rating4">
            <h4>Rating</h4>
            <div className='portrait-and-name'>
            <img src={portrait4} alt="portrait 4" />
            <p>Name</p>
            </div>
            <p>Review text:</p>
          </div>
        </div>
        </div>
      <div className="about-section">
        <div className="main_about">
          <div className="about_text">
            <h1>Little Lemon</h1> 
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
          </div>
          <div className="image-stack">
            <img className='about_image-1' src={aboutImage1} alt="about image1" />
            <img className='about_image-2' src={aboutImage2} alt="about image2" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main