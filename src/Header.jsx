import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Header({OpenSidebar }) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>
        <div className='header-right'>
        <span className='username'>PRAHALAD-project</span>  {/* Add your name wrapped in a span */}

            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
             {/* Add social media icons with links */}
        <a href="https://www.instagram.com/prahalad_19?utm_source=qr&igsh=MWdrYXpvZnZzMTdpNA==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='icon social-icon' />
        </a>
        <a href="https://www.linkedin.com/in/prahalad-prajapat-b59bb0263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='icon social-icon' />
        </a>
        <a href="https://github.com/prahaldprojects " target="_blank" rel="noopener noreferrer">
          <FaGithub className='icon social-icon' />
        </a>
        </div>
    </header>
  )
}

export default Header