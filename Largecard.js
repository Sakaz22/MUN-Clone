import React from 'react'
import img from './Assets/Largecards/A57I8022_d8d49f3a_6baf_4eec_bb65_1a803fbe4b001655211882054_thumb.png';
import './Largecard.css';

function Largecard() {
  return (
    <div className='largecard'>
        <div className="image">
            <img src={img} alt="" />
        </div>
        <div className="text__content">
            <div className="first__part">
                <div className="main__text">
                    <span className="red__line"></span>
                    <h3>Matic joins Roma after leaving United</h3>
                    <p>Nemanja will reunite with former Reds boss Jose Mourinho in Serie A next season.</p>
                </div>
            </div>
            <div className="second__part">
                <div className="below__text">
                    <p>7 h</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Largecard