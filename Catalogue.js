import React from 'react'
import './Catalogue.css'
import Carasouel from './add-ons/Carasouelcards'
function Catalogue() {
  return (
    <div className='catalogue__bg'>
        <div className="carasouel__content">
            <div className="text__above">
                <h2>Trending now</h2>
                <p>Enter the store</p>
            </div>
            <div className="catalogue__cards">
                <Carasouel />
                <Carasouel />
                <Carasouel />
                <Carasouel />
                <Carasouel />
                <Carasouel />
                <Carasouel />
                <Carasouel />
            </div>
        </div>
    </div>
  )
}

export default Catalogue