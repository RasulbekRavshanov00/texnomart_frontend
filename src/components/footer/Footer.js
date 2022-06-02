import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTelegramPlane, FaInstagram, FaYoutube, FaGooglePlay } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className="footer">
    <div className="footer_top_part">
        <div className="footer-item1"> 
        <p>Savol bormi? Telefon qiling</p>
        <h3>+998 71 209 99 44</h3>
        <p>Ishonch telefoni</p>
        <h3>+998 97 125 99 44</h3>
        <div className="footer_other_apps">
          <FaFacebookF/>
          <FaTelegramPlane/>
          <FaInstagram/>
          <FaYoutube/>
        </div>
        <div className="playmarket_app">
          <FaGooglePlay/>
          <p>Google Play</p>
        </div>
        <p className='adress_footer'>Do'kon manzillari Toshkent</p>
        </div>
          <ul className='footer_collection'>
            <h2>Kompaniya</h2>
            <li>B2B savdo</li>
            <li>Biz haqimizda</li>
            <li>Yangiliklar va Sharhlar</li>
            <li>IMEI ni teshirish</li>
          </ul>
          <ul className='footer_collection'>
            <h2>Kompaniya</h2>
            <li>B2B savdo</li>
            <li>Biz haqimizda</li>
            <li>Yangiliklar va Sharhlar</li>
            <li>IMEI ni teshirish</li>
          </ul>
          <ul className='footer_collection'>
            <h2>Kompaniya</h2>
            <li>B2B savdo</li>
            <li>Biz haqimizda</li>
            <li>Yangiliklar va Sharhlar</li>
            <li>IMEI ni teshirish</li>
          </ul>
          <ul className='footer_collection'>
            <h2>Kompaniya</h2>
            <li>B2B savdo</li>
            <li>Biz haqimizda</li>
            <li>Yangiliklar va Sharhlar</li>
            <li>IMEI ni teshirish</li>
          </ul>
    </div>
    <div className="footer_bottom_part">
      <p>2016-2022 ©Texnomart.uz. Barcha huquqlar himoyalangan. Tovarlarning ko'rsatilgan narxlari va ularni sotib olish shartlari faqat joriy sana uchun ko'rsatilgan.</p>
    </div>
    </div>
  )
}

export default Footer