import React from 'react'
import './gallery.css'
import assets from '../../constants/assets'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Gallery = () => {
    return (
        <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            id='gallery'>
            <div className='am_gal_text'>
                <h1>Our Gallery</h1>
            </div>
            <div className='am_gal'>
                <div>
                    <div className='am_gal_image_container'>
                        <img src={assets.gal_img_1} alt="" />
                    </div>
                </div>
                <div>
                    <div className='am_gal_image_container'>
                        <img src={assets.gal_img_2} alt="" />
                    </div>
                </div>
                <div>
                    <div className='am_gal_image_container'>
                        <img src={assets.gal_img_3} alt="" />
                    </div>
                </div>
                <div>
                    <div className='am_gal_image_container'>
                        <img src={assets.gal_img_4} alt="" />
                    </div>
                </div>
                <div>
                    <div className='am_gal_image_container'>
                        <img src={assets.gal_img_5} alt="" />
                    </div>
                </div>
                <div>
                    <div className='am_gal_image_container'>
                        <img src={assets.gal_img_6} alt="" />
                    </div>
                </div>
                <div>
                    <div className='am_gal_image_container'>
                        <img src={assets.gal_img_7} alt="" />
                    </div>
                </div>
                <div>
                    <div className='am_gal_image_container'>
                        <img src={assets.gal_img_8} alt="" />
                    </div>
                </div>
                <div>
                    <div className='am_gal_image_container'>
                        <img src={assets.gal_img_9} alt="" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Gallery