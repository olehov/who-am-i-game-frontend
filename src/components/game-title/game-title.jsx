import clsx from 'clsx';
import './game-title.scss';

function GameTitle({ small }) {
  return <h1 className={clsx('game-title', [small])}>WHO AM I</h1>;
}

export default GameTitle;
