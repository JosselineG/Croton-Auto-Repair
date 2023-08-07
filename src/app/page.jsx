'use client'
import React from 'react'
import Image from 'next/image'
import bg from '@/assets/sample2.jpg'
import PhoneIcon from '@mui/icons-material/Phone';
import location from '@/assets/shop.JPG'
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import ReactPlayer from 'react-player/lazy'
import { useEffect, useState } from 'react'
import logobg from '@/assets/Logo2.1.png'
import CompName from '@/assets/headerLogo1.3.4.png'

const Home = () => {
  const [showPlayer, setShowPlayer] = useState(false);
  /* By using one of these methods, you prevent the react-player 
  component from being rendered on the server side and ensure it's only 
  initialized on the client side, thereby avoiding the hydration mismatch error. */

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  return (
    <div id='Home' className='Home'>
      <section className='MainContent'>


        <div className='company-name'>
          <Image className='compName' src={CompName} alt='background Image' priority={true} />


        </div>

        <Image className='Logobg' src={logobg} alt='logo' />
        <div className='tel-div'>
          <a className='tel' href='tel:914-862-2376' >

            <PhoneIcon className='phone-icon' /> 914-862-2376

          </a>
        </div>


      </section>

      <section className='about' id='about' >

        <div className='AboutUs-image'>


          <Image className='location' src={location} alt='shop' priority={true} />

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

          {showPlayer && <ReactPlayer width='100%' height='100%' className='video' url='https://www.facebook.com/watch/?v=3119293664851644' priority={true} />}

        </div>
   

      <section className='fb-section'>

        <h1>SOCIAL</h1>

        <a className="fb-Logo-home" target="_blank" href="https://www.facebook.com/Crotonautorepair">

          <FacebookOutlinedIcon
            className='fb-icon-home' />

        </a>

      </section>

      <section className='copyRight-section'>

        <CopyrightIcon className='copyRight-Icon' /><h1> 2023 Croton Auto Repair. Made By </h1>
        <a target="_blank" href='https://www.josselineguardado.com'><h1>JG</h1></a>

      </section >
      </section>
    </div >
  )
}

export default Home;