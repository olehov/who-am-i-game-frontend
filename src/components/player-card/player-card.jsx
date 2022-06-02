import React from 'react';
import './player-card.scss';

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
