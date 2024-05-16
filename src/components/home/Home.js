import React from 'react'
import './home.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Home = () => {
  return (
    <div id='home'>
      <div className='big-background'>
        <div className='main-heading'>
          <motion.div variants={fadeIn('right', 0.7)}
            initial='hidden'
            animate='show'
            exit='hidden' className='main-heading-container'>
            <h1>AM Builders & Consultants</h1>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home