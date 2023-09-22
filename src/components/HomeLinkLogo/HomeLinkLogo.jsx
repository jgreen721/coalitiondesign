import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {mtnLogo} from "../../const"
import "./HomeLinkLogo.css"

const HomeLinkLogo = ({navLogoShadow,textColorOne,textColorTwo}) => {
  const location = useLocation();
  return (
    <Link to="/">
    <div className="homelink-logo-row">
        <div className={`homelink-logo-div ${navLogoShadow}`}>
            <img className="homelink-logo-img" src={mtnLogo} alt="" />
        </div>
{location.pathname != "/" &&
        <div className="homelink-header-column">
            <h3 className={`homelink-header-h3 ${textColorOne}`}>LosAngeles</h3>
            <h3 className={`homelink-header-h3 ${textColorTwo}`}>Mountains</h3>
        </div>
}
    </div>
    </Link>
  )
}

export default HomeLinkLogo