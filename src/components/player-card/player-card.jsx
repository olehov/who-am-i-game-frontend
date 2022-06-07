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
  avatarClassName,
  name,
  desriptionClassName = 'd-none',
  playerStausClassName = 'd-none',
}) {
  return (
    <div className="player-card">
      <div className="player">
        <div className={clsx('avatar', avatarClassName)}></div>
        <div className="player-name">{name}</div>
        <div className={clsx('player-decription', desriptionClassName)}>
          {desription}
        </div>
      </div>
      <div className={clsx('player-status', playerStausClassName)}></div>
    </div>
  );
}

export default PlayerCard;
