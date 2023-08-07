'use client'
import React, { useState } from 'react'
import './Navbar.css'
import Image from 'next/image'
import logo from '@/assets/Logo3.1.png'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {

        //Click is set as false. It will reverse the value, returning the opposite. !click; // Returns true. 


        if (!click) {
            console.log("Menu open");
            return setClick(true)


        }
        console.log("Menu closed");
        return setClick(false)

    }

    return (
        <div className='navBar' id='navBar'>
            <div className="navLinks">
                <div className='full-width-display'>


               {/*  <Image className='Logo' src={logo} alt='logo' /> */}
                    <Link className='links' href='/'>Home</Link>
                    <Link className='links' href='/#about' scroll={false}>About</Link>
              
                    <Link className='links' href="/services" >Services</Link>
                    <Link className='links' href='/contact'>Contact</Link>


                </div>

                <div className='dropDownBar'>

                    <Link href='/'>
                        <Image className='dropDown-Logo' src={logo} alt='logo' />
                    </Link>



                    <div className='Menu'>

                        <Button

                            onClick={handleClick}
                            endIcon={<MenuIcon style={{ color: "white" }} />}>


                        </Button>


                    </div>
                </div>
                <div className="menuLinks">

                    {/*  simplified conditional operator like if / else. */}
                    {click ? (

                        <ul onClick={handleClick} >

                            <li>

                                <Link className='links' href='/'>Home</Link>
                            </li>
                            <li>
                                <Link className='links' href='/#about' scroll={false}>About</Link>

                            </li>
                            <li>
                                <Link className='links' href="/services" >Services</Link>
                            </li>
                            <li>
                                <Link className='links' href='/contact'>Contact</Link>
                            </li>
                            <li>
                                <a
                                    className="fb-Logo-nav"
                                    target="_blank"
                                    href="https://www.facebook.com/Crotonautorepair"
                                >

                                    <FacebookOutlinedIcon
                                        className='fb-icon-nav' />

                                </a>
                            </li>
                        </ul>) : null}
                </div>
            </div>
        </div>
    )
}

export default Navbar;