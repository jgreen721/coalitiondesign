import React from 'react'
import "./Hero.css"
import { mtnForegroundImg, blueskyBackgroundImg } from '../../../../const'




const Hero = () => {



  return (
      <header className="home-hero">
        <div className="home-hero-header">
        <h1 className="hero-h1 slide-left dark-text">LosAngeles</h1>
        <h1 className="hero-h1 drop-down dark-blue-text">Mountains</h1>
        </div>
         <img className="hero-background-img" src={blueskyBackgroundImg} alt="" />
        <img className="hero-foreground-img" src={mtnForegroundImg} alt="" /> 
      </header>
 
  )
}

export default Hero