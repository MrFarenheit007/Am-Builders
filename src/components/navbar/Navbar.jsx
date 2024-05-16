import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import {Link} from 'react-router-dom'
import logo from '../../assets/Logo.png'

const Menu = () => (
  <>
    <p><Link to="/">Home</Link></p>
    <p><a href="#properties">Properties</a></p>
    <p><a href="#about">About</a></p>
    <p><a href="#gallery">Gallery</a></p>
    <p><a href="#map">Map</a></p>
    <p><Link to="/contact">Contact</Link></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='am__navbar'>
      <div className='am__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
      <div className='am__navbar-links'>
        <div className='am__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='am__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='am__navbar-menu_container scale-up-center'>
            <div>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar