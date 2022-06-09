import clsx from 'clsx';
import './leave-game-btn.scss';

function LeaveGameBtn({ className, setModalActive }) {
  return (
    <button
      className={clsx('leave-game-btn', className)}
      onClick={() => {
        setModalActive(true);
      }}
    >
      LEAVE GAME
    </button>
  );
}

export default LeaveGameBtn;
