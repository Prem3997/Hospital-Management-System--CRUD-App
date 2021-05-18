import React from 'react'
import homePic from './homePic.jpg'
import './Styles/HomePageStyles.css'

export const HomePageComponent = () => {
    return (
        <div>
            <img className='homePic' alt='homepage' src={homePic}></img>
        </div>
    )
}
