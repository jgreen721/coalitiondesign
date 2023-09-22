import React from 'react'
import HeaderFormatter from '../../../../components/HeaderFormatter/HeaderFormatter';
import { Gallery } from '..';
import "./HistoryHero.css";

const HistoryHeader = ({bgImg,changeBackground}) => {
  return (
    <header className="hero history-hero">
       


            <div className="history-header-content z-50">
                <HeaderFormatter first="0" second="1" caption="History"/>
                {/* <!-- invented solution to offset paragraph distance from 1 large h1 distance without using guessed css distance --> */}
                <div className="flex-offset">
                    <h1 className="no-opacity">0</h1>
                    <p className="history-p dark-blue-text fade-in">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A dolores dolorem distinctio illum ad qui eos voluptas accusamus et laudantium cupiditate, repudiandae velit, id at aperiam ullam tenetur cumque eveniet quas ut consectetur. Sequi quos dolorum doloremque voluptates, ratione, iste voluptas esse est numquam aspernatur alias enim ut laudantium pariatur provident labore et doloribus. Maiores delectus a id fugiat necessitatibus suscipit expedita aut! Delectus laudantium nemo ipsa veniam assumenda blanditiis, debitis amet labore nulla sit?</p>
                </div>
            </div>
        <div className="history-header-overlay">
            <img className="history-header-overlay-img" src={bgImg} alt="" />
        </div>
              <Gallery bgImg={bgImg} changeBackground={changeBackground}/>

    </header>
  )
}

export default HistoryHeader