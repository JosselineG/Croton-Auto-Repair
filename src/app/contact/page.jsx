"use client"

import React from 'react'
import { motion } from "framer-motion"
import './Contact.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Button from '@mui/material/Button'


const Contact = () => {


  return (

    <div className='Contact'>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <div className='contact-content'>
        
          <div className='contact-heading'>

            <h1>
              Contact Us
            </h1>

          </div>

          <div className='contact-content-box'>
            <div className='message-box'>
             
              <div className='shop-info'>

                <h1>DONT HESITATE TO REACH OUT IF YOU NEED ASSISTANCE!</h1>
                <span> Phone Number: (914) 862-2376</span>
                <span> Email: crotonautorepair@gmail.com</span>
                <span> Address: 380 S Riverside Ave, Croton-On-Hudson, NY 10520</span>

              </div>
            
              <div className='BusinessHours'>

                <h1>HOURS</h1>

                <ul>
                  <li>
                    Monday - Friday
                  </li>
                  <li>
                    8:30AM-6PM
                  </li>
                  <li>
                    Saturday (Appointment Only)
                  </li>
                  <li>
                    9AM-1PM
                  </li>
                  <li>
                    Sunday
                  </li>
                  <li>
                    Closed
                  </li>

                </ul>

              </div>
              <div>
                
                <h1>SOCIAL</h1>
                <a className="fb-Logo" target="_blank" href="https://www.facebook.com/Crotonautorepair"  >
                  <Button
                    endIcon={<FacebookOutlinedIcon
                      style={{ fontSize: '3vw', display: 'flex', justifyContent: 'center', alignItems: "center" }} />} />
                </a>
             
              </div>
            </div>
          
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.242565249754!2d-73.88377178458026!3d41.19468497928233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2c7964c6a2ea7%3A0xebcb8a9ce52da5ef!2sCroton%20Auto%20Repair%20LLC%20and%20Towing%20Service!5e0!3m2!1sen!2sus!4v1688748273589!5m2!1sen!2sus"
                className='map'
                style={{ border: '0' }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>

           
          </div>
        </div>
      </motion.div>
    </div>

  )
}

export default Contact