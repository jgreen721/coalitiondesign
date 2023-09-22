import React, {useState} from 'react'
import { TeamHeader,ScheduleCard,TeamFooter } from './components'
import { teamsbg, teamsBg2 } from '../../const'
import "./Team.css"

const Team = () => {
  const [counter,setCounter] = useState(0);
  const bgImgs =[teamsbg,teamsBg2]
  return (
    <div className="container team-container">
      <TeamHeader setCounter={setCounter}/>
      <div className="team-container-content">
      <div className="team-bg-overlay">
        <img className="teams-bg-img" src={bgImgs[counter]} alt="" />
      </div>
      <ScheduleCard/>
      <TeamFooter/>
      </div>
    </div>
  )
}

export default Team