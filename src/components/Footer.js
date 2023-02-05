import React from 'react'
import logo from './../icons_assets/Logo .svg'
import facebookIcon from './../icons_assets/facebook.png'
import instagramIcon from './../icons_assets/instagram.png'
import whatsappIcon from './../icons_assets/whatsapp.png'
import copyright from './../icons_assets/copyright.png'
import './footer.css'


const Footer = () => {
  return (
    <footer>
        <div className="footer_section">
          <div className="footer_container">
            {/* <div className="footer_container__navigation">
              <h2>Navigation</h2>
            </div> */}
            <div className="footer_content">
                <div className="footer_container__logo">
                  <img src={logo} alt="logo" />
                </div>
                <div className="footer_container__contact-info">
                  <h3>Contact info:</h3> 
                  <p>P.O Box 1233333</p>
                  <p>NAIROBI</p>
                  <p>KENYA</p>
                  </div>
                <div className="footer_container__social-media-links">
                  
                  <h3>Social Media Links</h3>  
                  <div className="social-media-icons">
                    <div className="icon-image"><img src={facebookIcon} alt="facebook icon" /></div>
                   
                    <div className="icon-image"><img src={whatsappIcon} alt="whatsapp icon" /></div>
                 
                    <div className="icon-image"><img src={instagramIcon} alt="instagram icon" /></div>
                    

                  </div>
                  <div><img className='copyright-icon' src={copyright} alt="copyright" />
                  <span className='text-span'>All copyrights reserved </span></div>
                </div>
            </div>
            
          </div>
        </div>
    </footer>
  )
}

export default Footer