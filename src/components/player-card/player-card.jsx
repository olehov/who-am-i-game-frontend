import React from 'react';
import clsx from 'clsx';
import './player-card.scss';

// <-- Use this names for Avavr icons -->
// 'avatar01'
// 'avatar02'
// 'avatar03'
// 'avatar04'

// <-- Use this names for Player Satus -->
// 'dont-know'
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
        <div className={clsx('avatar', avatar)}></div>
        <div className="player-name">{name}</div>
        <div className={clsx('player-decription', desription)}>
          {desription}
        </div>
      </div>
      <div className={clsx('player-status', playerStaus)}></div>
    </div>
  );
}

export default PlayerCard;
