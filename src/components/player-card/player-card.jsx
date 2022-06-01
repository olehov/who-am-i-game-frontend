import React from 'react'
import './player-card.scss'

function PlayerCard({name, desription}) {
  return (
    <div className="player-card">
    <div className="player">
      <div className="avatar"></div>
      <div className="player-name">{name}</div>
      <div className="player-decription">{desription}</div>
    </div>
    <div className="player-status">?</div>
  </div>
  )
}

export default PlayerCard