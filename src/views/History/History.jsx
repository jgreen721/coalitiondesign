import React, {useState} from 'react'
import {HistoryNav, HistoryHero} from './components'
import {historyBg,carousel1,carousel2,carousel3,carousel4} from "../../const"

import "./History.css"

const History = () => {
  const [bgImg,setBgImg] = useState(historyBg)

  const changeBackground=(id)=>{
    console.log(id)
    if(id == 1)setBgImg(carousel1)
    if(id == 2)setBgImg(carousel2)
    if(id == 3)setBgImg(carousel3)
    if(id == 4)setBgImg(carousel4)

  }
  return (
    <div className="container history-container">
      <HistoryNav/>
      <HistoryHero bgImg={bgImg} changeBackground={changeBackground}/>
    </div>
  )
}

export default History