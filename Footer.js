import React from 'react'
import './Footer.css'
import fb from './Assets/Icons/fb_2x1624877204997_img1x.png'
import hcl from './Assets/Icons/HCL_Comp_DarkBG_180xAuto1547462086653.png'
import insta from './Assets/Icons/instagram_2x1624877438061_img1x.png'
import tiktok from './Assets/Icons/tiktok_line1624878954741_img1x.png'
import twiter from './Assets/Icons/twitter_white_2x1624877758813_img1x.png'
import yt from './Assets/Icons/YouTube-FooterIcon-x21521028010983.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="top__section">
            <div className="social__media">
                <button className="social__icons"><img src={yt} alt="" /></button>
                <button className="social__icons"><img src={fb} alt="" /></button>
                <button className="social__icons"><img src={twiter} alt="" /></button>
                <button className="social__icons"><img src={insta} alt="" /></button>
                <button className="social__icons"><img src={tiktok} alt="" /></button>
            </div>
            <div className="buttons">
            <button className='shop' id='shopnow'>Shop Now</button>
            <button className='shop' id='signup'>Sign Up</button>
            </div>
        </div>
        <div className="bottom__section">
            <ul>
                <li className="footer_txt">Download the Official App</li>
                <li className="footer_txt">Accessibility</li>
                <li className="footer_txt">Contact Us</li>
                <li className="footer_txt">Jobs & Careers</li>
                <li className="footer_txt">Privacy</li>
                <li className="footer_txt">Cookies</li>
                <li className="footer_txt">Terms Of Use</li>
                <li className="footer_txt">Terms & Conditions of Sale</li>
                <li className="footer_txt">Anti-slavery</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer