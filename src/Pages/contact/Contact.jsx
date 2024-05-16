import React from 'react'
import './contact.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../containers/footer/Footer'
import Map from '../../containers/map/Map'

const Contact = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <motion.div className='am__contact-section big-background'
                variants={fadeIn('right', 0.7)}
                initial='hidden'
                animate='show'
                exit='hidden'>

                <div className='am__contact-section-container'>
                    <h1 className='gradient-heading'>Please Feel Free to Contact Us</h1>
                    <div className='am-contact-container'>
                        <div className='am__contact-div'>
                            <p className='gradient-text'>Our Address: </p>
                            <h4 className='gradient-info'>345 MB, Phase 6 DHA, Lahore </h4>
                        </div>
                        <div className='am__contact-div'>
                            <p className='gradient-text'>Our Phone:</p>
                            <h4 className='gradient-info'>03228410875</h4>
                        </div>
                        <div className='am__contact-div'>
                            <p className='gradient-text'>Email:</p>
                            <h4 className='gradient-info'>info@payme.net</h4>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div>
                <Map />
                <Footer />
            </div>
        </div>
    )
}

export default Contact