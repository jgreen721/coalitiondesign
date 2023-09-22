import React from 'react'
import { HomeLinkLogo } from '../../../../components'
import "./TeamFooter.css"

const TeamFooter = () => {
  return (
    <footer className="team-footer">
<HomeLinkLogo navLogoShadow="darkblue-overlay" textColorOne="gray-text faded" textColorTwo="gray-text faded"/>
<h5 className="uppercase text-dark-blue faded">Copyright 2016<span className="desktop">, all rights reserved</span></h5>
    </footer>
  )
}

export default TeamFooter