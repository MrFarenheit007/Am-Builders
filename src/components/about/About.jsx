import React from 'react'
import './about.css'
import assets from './assets'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const About = () => {
  return (
    <motion.div className='am_about_section' id='about'
      variants={fadeIn('left', 0.7)}
      initial='hidden'
      animate='show'
      exit='hidden'>

      <div className='am_about_pic'>
        <img src={assets.img_about} alt="" />
      </div>
      <div className='am_about_text'>
        <p>Am Builders and Consultants started its journey with the name of AM Builders and Consultants in 2016. Since then this company is an active player in Pakistan Real Estate Market, and we are proud of our solid relationship with our clients in the Real Estate industry.
        </p>
        <br />
        <p>We have a highly motivated and dedicated professional team, with years of experience in the real estate business. They have helped hundreds of clients in buying, selling, and hiring their properties.  Our property experts are equipped with a strong sales background, on ready and off-plan projects. They will advise you on how to invest your money wisely.</p>
        <br />
        <p>Moreover, because our company is partnering with the largest Real Estate developers in Pakistan, it is considered, a one-stop shop where clients do not need to go anywhere else in Pakistan particularly in Lahore, Islamabad, Murre and Gujranwala for acquiring a property to rent or sell. Our head office is located right at the heart of Business Bay, one of the most sought-after areas in Pakistan in terms of renting and buying/selling as it is considered a business and financial hub. Moreover, our site offices are working on all our projects to provide our clients with on-the-spot services.</p>
        <br />
        <p>We start with extensive research and accomplish the matured implementation right from the first step to property planning and profit placement. The research department keeps real estate in sync with the latest and in-vogue information that helps us drive any
          challenge successful and profitable.</p>
        <br />
        <p>All of the above makes AM Builders and Consultants your first choice for renting, buying/selling, or investment opportunities.</p>
      </div>
    </motion.div>
  )
}

export default About