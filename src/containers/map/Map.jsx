import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import './map.css'

const Map = () => {
  return (
    <motion.div className='am_map_div' id='map'
      variants={fadeIn('left', 0.7)}
      initial='hidden'
      animate='show'
      exit='hidden'>
        
      <div className='am_map_container'>
        <h1>Our Location</h1>
        <p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27223.085380128497!2d74.40363227431645!3d31.472331000000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919091e93e2c0b1%3A0xb84c39b2899b80bb!2sSearch%20Properties!5e0!3m2!1sen!2s!4v1696673231894!5m2!1sen!2s" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </p>
      </div>
    </motion.div>
  )
}

export default Map