import React from 'react'
import {Navbar,Hero} from "./components"
import { mtnForegroundImg, blueskyBackgroundImg } from '../../const'

import "./Home.css"

const Home = () => {
  return (
    <div className="container home-container">
      <Navbar/>
      
      <Hero/>


    </div>
  )
}

export default Home