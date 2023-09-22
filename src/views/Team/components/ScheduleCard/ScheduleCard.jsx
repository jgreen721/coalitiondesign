import React from 'react'
import "./ScheduleCard.css"

const ScheduleCard = () => {
    var dates = [
        {id:1,date:"25 Nov 2016",activity:"Vestibulum viverra",padding:false,stagger:"1.25s"},
        {id:2,date:"25 Nov 2016",activity:"Vestibulum viverra",padding:false,stagger:"1.5s"},
        {id:3,date:"18 Dec 2016",activity:"Vestibulum viverra",padding:true,stagger:"1.75s"},
        {id:4,date:"7 Jan 2017",activity:"Vestibulum viverra",padding:false,stagger:"2s"},
    ]
  return (
    <div className="schedule-card z-50">
        <div className="schedule-card-content">
        <h3 className="schedule-h3 blue-text uppercase dark-blue-text">Schedule</h3>
        <ul className="dates">
            {dates.map(d=>(
                <li style={{"--i":d.stagger}} key={d.id} className={d.padding ? "date-item padding-y" : "date-item"}>
                    <h5 className="dark-text">{d.date}</h5>
                    <h5 className="dark-text">{d.activity}</h5>
                </li>
            ))}
        </ul>
        </div>
    </div>
  )
}

export default ScheduleCard