'use client'
import React from 'react'
import Image from 'next/image'
import bg from '@/assets/bgImg3.jpg'
import location from '@/assets/shop.JPG'
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';


const Home = () => {
  return (
    <div id='Home' className='Home'>
      <section className='MainContent'>

        <Image className='bgImg' src={bg} alt='background Image' />

        <div className='CompanyName'>
          <h1>CROTON AUTO REPAIR</h1>
          <h2>AND TOWING </h2>
          <h2>SERVICE</h2>
        </div>

      </section>

      <section className='about' id='about' >

        <div className='AboutUs-image'>


          <Image className='location' src={location} alt='shop' />

          <div className='About-Us'>

            <span>
              <h1>At Croton Auto Repair Shop,</h1>
            </span>
            <span>
              <h3>we pride ourselves on being a
                reputable and dependable auto repair facility.
              </h3>
            </span>
            <span>
              <h2>We invite you to experience our exceptional service firsthand.
                Our team of highly skilled technicians are trained to use
                the latest technology for all diagnostic and repairs for your
                vehicle.
              </h2>
            </span>


          </div>
        </div>


        <div className='about-video'> 
             <video autoPlay muted loop >
            <source src="/CrotonAutoRepair2.1.mp4" type="video/mp4" />
          </video> 

     
        </div> 

        <div className='facebook-icon'>

          <h1>SOCIAL</h1>
          <a
            className="fb-Logo-home"
            target="_blank"
            href="https://www.facebook.com/Crotonautorepair"
          >

            <FacebookOutlinedIcon
              className='fb-icon-home' />

          </a>


        </div>


        <div className='copyright'>
          <CopyrightIcon className='copyRight-Icon' /><h1> 2023 Croton Auto Repair. Made By </h1>
          <a target="_blank" href='https://www.josselineguardado.com'><h1>JG</h1></a></div>
      </section >
    </div >
  )
}

export default Home;