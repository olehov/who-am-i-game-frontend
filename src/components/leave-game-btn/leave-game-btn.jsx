import { useState } from 'react';
import LeaveGameModal from '../modals/leave-game/leave-game';
import './leave-game-btn.scss';

function LeaveGameBtn({ page }) {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <button
        className={`leave-game-btn ${`loading`}-page`}
        onClick={() => {
          setModalActive(true);
        }}
      >
        Leave Game
      </button>
      <LeaveGameModal showModal={modalActive} setModalActive={setModalActive} />
    </>
  );
}

export default LeaveGameBtn;
