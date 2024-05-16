import React from 'react'
import './properties_card.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Properties_Card = ({ post }) => {
  return (
    <motion.div
      variants={fadeIn('left', 0.7)}
      initial='hidden'
      animate='show'
      exit='hidden'>
      <div className='post_container'>
        <img src={post.image} alt='' />
        <div className='description'>
          <h3>{post.name}</h3>
          <h4>Price: <span className='spa'>{post.price}</span></h4>
          <h4>City: <span className='spa'>{post.city}</span></h4>
          <h4>Area: <span className='spa'>{post.area}</span></h4>
          <h4>Desc: <span className='spa'>{post.description}</span></h4>
          <button className='am-prop-button'>Contact Us for More Information</button>
        </div>
      </div>
    </motion.div>
  )
}

export default Properties_Card