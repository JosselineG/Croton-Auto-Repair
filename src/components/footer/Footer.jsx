'use client'

import React from 'react'
import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Button from '@mui/material/Button'

const Footer = () => {
  return (
    <div className='footer'>

      <div>
        <h1>Social</h1>
        <a className="fb-Logo" href="https://www.facebook.com/Crotonautorepair"  >
          <Button
            endIcon={<FacebookOutlinedIcon
              style={{ display: 'flex', alignItems: "center", flexWrap: 'wrap' }} />} />
        </a>
      </div>

      <div className='contactBox'>
            <h1>Contact Us</h1>
              <ul>
                <li>
                  Phone Number: (914) 862-2376
                </li>
                <li>
                  Email: crotonautorepair@gmail.com
                </li>
                <li>
                  Address: 380 S Riverside Ave, Croton-On-Hudson, NY 10520
                </li>
              </ul>

      </div>
      <div className='BusinessHours'>
      <h1>Hours</h1>
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

    </div>
  )
}

export default Footer