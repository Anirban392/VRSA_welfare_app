import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png';
function Footer() {
  return (
    <div className="footer-main">
        <div className="footer-fix">
        <div className="footer-inner">
            <img src={Logo} alt="Website Logo" className="footer-logo" />
            <h2>Voice for Research in<br></br>Social Administration</h2>
            
            <div className="contact">
                
                <div className="jump-contact">
                <p>28 A, Asutosh Colony, Haltu,<br></br> Kolkata - 700078</p>
                <p>9433444247 / 6290782609</p>
                <p>GOVT. REGD. NO - 00372(2014)</p>
                </div>
                
                
            </div>
            <div className="line-1"></div>

        
     
      <div className="footer-tag">
       <h3 className="title-1">Founder - Soumen Chakraborty</h3>
             <div className="footer-links">
    <Link to="/">Home</Link>
    <div className="line-small"></div>
    <Link to="/about">About Us</Link>
    <div className="line-small"></div>
    <Link to="/work">Our Work</Link>
    <div className="line-small"></div>
    <Link to="/campaigns">Campaigns</Link>
  </div>
        
      </div>
      </div>

      <div className="line-last"></div>

      </div>
      <div className="footer-bottom">
     <h5 className="copyright">@VRSA All rights reserved</h5>
     </div>
    </div>
  )
}

export default Footer
