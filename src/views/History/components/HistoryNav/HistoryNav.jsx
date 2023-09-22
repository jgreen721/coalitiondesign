import React from 'react'
import {mtnLogo} from "../../../../const"
import {Link} from "react-router-dom"
import {HomeLinkLogo} from "../../../../components"
import "./HistoryNav.css"

const HistoryNav = () => {
  return (
    <nav className="nav history-nav">
<HomeLinkLogo navLogoShadow="dark-shadow" textColorOne="dark-text" textColorTwo="dark-blue-text"/>
    <ul className="nav-links">
            <li className="nav-link-item">
                <Link to="/history" className="nav-link">
                   <h4 className="nav-link-h4 dark-blue-text dark-blue-underline uppercase"> 01 History </h4>
                </Link>
            </li>
            <li className="nav-link-item">
                <Link to="/team" className="nav-link">
                   <h4 className="nav-link-h4 dark-blue-text dark-blue-underline uppercase"> 02 Team </h4>
                </Link>
            </li>
        </ul>

    </nav>
  )
}

export default HistoryNav