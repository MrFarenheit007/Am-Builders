import React from 'react'
import './footer.css'
import gptLogo from '../../assets/Logo.png'

const Footer = () => {
  return (
    <div className='am__footer section__padding' id='contact'>
      <div className='am__footer-heading'>
        <h1 className='gradient__text'>
          Best Consultants in the Real Estate Business</h1>
      </div>
     
      <div className='am__footer-links'>
        <div className='am__footer-links_logo'>
          <img src={gptLogo} alt="logo" />
          <p>345 MB, Phase 6 DHA, Lahore<br /> All Rights Reserved</p>
        </div>
        <div className='am__footer-links_div'>
          <h4>Links</h4>
          <p>FaceBook</p>
          <p>Instagram</p>
          <p>Contact</p>
        </div>
        <div className='am__footer-links_div'>
          <h4>Working Areas</h4>
          <p>DHA</p>
          <p>New Shadman</p>
          <p>Bahria Town</p>
        </div>
        <div className='am__footer-links_div'>
          <h4>Get in Touch</h4>
          <p>345 MB, Phase 6 DHA, Lahore</p>
          <p>03074316643</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className='am__footer-copyright'>
        <p>© 2023 AM Builders and Consultants. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer