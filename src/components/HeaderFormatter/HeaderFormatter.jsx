import React from 'react'
import "./HeaderFormatter.css"

const HeaderFormatter = ({first,second,caption}) => {
  return (
      <div className="header-format-parent-row">
    {/* <div className="header-column"> */}
    <h1 style={{"--i":"1s"}} className="header-h1 slide-right">{first}</h1>
    <h1 style={{"--i":"0s"}} className="header-h1 slide-right">{second}</h1>

{/* </div> */}


{/* <div className="header-column"> */}

     {/* <div className="header-row"> */}
        {/* <h1 style={{"--i":"0s"}} className="header-h1 slide-right">{second}</h1> */}
         <div className="header-mini-column">
            <h3 style={{"--i":"1s"}} className="header-h3 dark-blue-text uppercase scale-grow">{caption}</h3>
            <div className="square"></div>
        </div> 
    {/* </div>  */}
    </div>
  )
}

export default HeaderFormatter