import React from 'react'
import HeaderFormatter from '../../../../components/HeaderFormatter/HeaderFormatter'
import "./TeamHeader.css"

const TeamHeader = ({setCounter}) => {
  return (
    <div className="team-header z-50">
      <div className="team-header-row">
        <HeaderFormatter first="0" second="2" caption="climb"/>
        <p className="team-header-blurb">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ducimus ex consequuntur perferendis ab, impedit accusantium illo earum id sunt itaque sed consequatur tempore modi, odit!</p>
      </div>
      <div className="team-header-links-row">
        <ul className="img-links">
          <li onClick={()=>setCounter(0)} className="img-link-item">
            <h4 className="img-link-h4 uppercase">Mountain1</h4>
          </li>
          <li onClick={()=>setCounter(1)} className="img-link-item">
            <h4 className="img-link-h4 uppercase">Mountain2</h4>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TeamHeader