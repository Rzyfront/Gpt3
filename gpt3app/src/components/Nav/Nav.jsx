import React from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './nav.css'
import logo from '../../img/Logo.svg';

const Nav = () => {
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links-logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='navbar-links-container'>
          <p><a href="#Home">Home</a></p>
          <p><a href="#Home">What is GPT3</a></p>
          <p><a href="#Home">Open AI</a></p>
          <p><a href="#Home">Case Studies</a></p>
          <p><a href="#Home">Library</a></p>
        </div>
      </div>
      
      <div className='navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
    </div>
  )
}


export default Nav;