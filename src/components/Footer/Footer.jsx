import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo1.webp';
import instagram_icon from '../Assets/instagram_icon.png';
import Pinterest_icon  from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
const Footer = () => {
  return (
    <div className='Footer'>
        <div className="FooterLogo">
            <img src={footer_logo} alt="" />
        </div>
        <ul className="Footerlinks">
            <li id='li'>Company</li>
            <li id='li'>Products</li>
            <li id='li'>Offices</li>
            <li id='li'>About</li>
            <li id='li'>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={Pinterest_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr  id='hr'/>
            <p>Copyright @ 2023 -all Rights Reseved</p>
        </div>
    </div>
  )
}

export default Footer