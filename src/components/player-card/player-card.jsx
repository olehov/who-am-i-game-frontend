import React from 'react';
import './player-card.scss';

// <-- Use this names for Avavr icons -->
  // 'avatar01'
  // 'avatar02'
  // 'avatar03'
  // 'avatar04'

  // <-- Use this names for Player Satus -->
  // 'wait'
  // 'yes'
  // 'no'

  // if you don't asined description and player status it will be hidden 

function PlayerCard({
  avatar,
  name,
  desription = 'd-none',
  playerStaus = 'd-none',
}) {
  return (
    <div className="player-card">
      <div className="player">
        <div className={`avatar ${avatar}`}></div>
        <div className="player-name">{name}</div>
        <div className={`player-decription ${desription}`}>{desription}</div>
      </div>
      <div className={`player-status ${playerStaus}`}></div>
    </div>
  );
}

export default PlayerCard;
