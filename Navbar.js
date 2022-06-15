import React from 'react'
import './Navbar.css';
import adidas from './Assets/NavBar/Adidas_Comp_DarkBG_180xAuto1547460200382.png';
import teamviwer from './Assets/NavBar/TeamViewer-logo-white-header1625085576209.png';
import tezos from './Assets/NavBar/TezosLogo_Horizontal_White1644483074005.png';
import kohler from './Assets/NavBar/Kohler_Comp_DarkBG_180xAuto1547470584246.png';
import logo from './Assets/NavBar/Header-Logo1500994616801.png';
import HCL from './Assets/NavBar/HCL_Comp_DarkBG_180xAuto1547462086653.png';
import SearchIcon from './Assets/NavBar/icons8-search.svg';

function Navbar() {
  return (
    <div className='Navbar'>
      
      <div className="Nav__top">
        <div className="left__top">
          <p>Sign-in</p>
        </div>
        <div className="right__top">
          <img src={adidas} alt="" className='nav__topimg'/>
          <img src={teamviwer} alt="" className='nav__topimg'/>
          <img src={tezos} alt="" className='nav__topimg'/>
          <img src={kohler} alt="" className='nav__topimg'/>
        </div>
      </div>

      <div className="Nav__bottom">
        <div className="left__bottom">
          <img src={logo} alt="" className='logo'/>
          <div className="navlist">
            <ul>
              <li>latest</li>
              <li>mutv</li>
              <li>shop</li>
              <li>fixtures</li>
              <li>tickets</li>
              <li>my united</li>
              <li>fans</li>
              <li>players</li>
              <li>old trafford</li>
              <li>more</li>
            </ul>
          </div>
        </div>
        <div className="right__bottom">
          <ul>
            <li><img src={SearchIcon} alt="" /></li>
            <p>Search</p>
          </ul>
          <button className='HCL'>
            <p>Powered by</p>
            <img src={HCL} alt="" className='hcl__logo'/>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Navbar