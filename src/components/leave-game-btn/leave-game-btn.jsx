import clsx from 'clsx';
import './leave-game-btn.scss';

function LeaveGameBtn({ page, setModalActive }) {
  return (
    <>
      <button
        className={clsx('leave-game-btn', [page])}
        onClick={() => {
          setModalActive(true);
        }}
      >
        LEAVE GAME
      </button>
    </>
  );
}

export default LeaveGameBtn;
