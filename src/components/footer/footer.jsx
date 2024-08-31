import React from 'react'
import "./footer.css"
import { instagram, linkdin } from '../../assets/data'
const Footer = () => {
  return (
    <footer className='footer'>
 <div class="footer-container">
            <div class="footer-section">
                <h3>Policies</h3>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Refund Policy</a></li>
                    <li><a href="#">Website Policy</a></li>
                </ul>
            </div>
    
            <div class="footer-section">
                <h3>Rhyno</h3>
                <ul>
                    <li><a href="https://www.linkedin.com/company/your-company" target="_blank">Career</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
    
            <div class="footer-section">
                <h3>Products & Services</h3>
    
                <ul>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Rentals</a></li>
                </ul>
            </div>
    
            <div class="footer-section download">
                <a href="https://www.instagram.com/your-company" target="_blank">
                <div dangerouslySetInnerHTML={{ __html: instagram }} />
                </a>
                <a href="https://www.linkedin.com/company/your-company" target="_blank">
                <div dangerouslySetInnerHTML={{ __html: linkdin }} />
                </a>
            </div>
        </div>
    
        <div class="footer-bottom">
            <p>All information is subject to specific conditions | Copyright © 2024 RHYNO. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer