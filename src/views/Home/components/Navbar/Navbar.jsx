import React from 'react'
import { Link } from 'react-router-dom'
import { mtnLogo } from '../../../../const'
import {HomeLinkLogo} from "../../../../components"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="nav home-nav scale-grow z-100">
        <div>
        <HomeLinkLogo navLogoShadow="home-nav-shadow" textColorOne="" textColorTwo=""/>
        </div>
        <ul className="nav-links">
            <li className="nav-link-item">
                <Link to="/history" className="nav-link uppercase">
                   <h4 className="nav-link-h4"> 01 History </h4>
                </Link>
            </li>
            <li className="nav-link-item">
                <Link to="/history" className="nav-link uppercase">
                   <h4 className="nav-link-h4"> 02 Team </h4>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar