import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'

import logo from '../assets/logo.png'

const Portfolio = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href='/' aria-label='Home'>
                <img src={logo} className='mx-2' width={50} height={33} alt='Logo'/>
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/anh-quan-804158350/?trk=opento_sprofile_topcard'
               target='_blank'
               rel='noopener noreferrer'
               aria-label='LinkedIn'>
                <FaLinkedin />
            </a>
            <a href='https://github.com/anhquan3302'
               target='_blank'
               rel='noopener noreferrer'
               aria-label='Github'>
                <FaGithub />
            </a>
            <a href='https://www.instagram.com/anhquan3302/'
               target='_blank'
               rel='noopener noreferrer'
               aria-label='Instagram'>
                <FaInstagram />
            </a>
            <a href='https://www.facebook.com/profile.php?id=100048692416425'
               target='_blank'
               rel='noopener noreferrer'
               aria-label='Facebook'>
                <FaFacebook />
            </a>
        </div>
    </nav>
  )
}

export default Portfolio
