import clsx from 'clsx';
import './game-title.scss';

function GameTitle({ className }) {
  return <h1 className={clsx('game-title', className)}>WHO AM I</h1>;
}

export default GameTitle;
