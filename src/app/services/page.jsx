"use client"

import React from 'react'
import Image from 'next/image'
import AImg from '@/assets/TowImg2.jpg'
import BImg from '@/assets/CarImg.JPG'
import CImg from '@/assets/image3.jpg'
import { motion } from "framer-motion"
import './Services.css'


const Services = () => {
  return (
    <div className='services'>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <div className='List-image'>

          <div className='List'>
            <h1> OUR SERVICES</h1>
           
              <h2>Complete Auto Repair shop, we specialize
               in domestic and imported vehicles.
              </h2>
           
            <span>

              <li>Towing Services</li>
              <li>Brakes</li>
              <li>Tune-ups</li>
              <li>Oil Changes</li>
              <li>General Service</li>
              <li>Import Specialist</li>
              <li>A/C Service</li>
              <li>Inspection</li>
              <li>Car Audio & Video Service</li>

            </span>
          </div>

          <div className='images'>
            <Image className='AImg' src={AImg} alt='Tow Service' />
            <Image className='BImg' src={BImg} alt='Car Lift' />
            <Image className='CImg' src={CImg} alt='Car' />

          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default Services