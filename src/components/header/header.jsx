import GameTitle from '../game-title/game-title';
import LeaveGameBtn from '../leave-game-btn/leave-game-btn';
import LeaveGameModal from '../modals/leave-game/leave-game';
import { useState } from 'react';
import './header.scss';

function Header() {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <header className="header">
      <GameTitle className={'small'} />
      <LeaveGameBtn page={'game-page'} setModalActive={setDisplayModal} />
      <LeaveGameModal
        showModal={displayModal}
        setModalActive={setDisplayModal}
      />
    </header>
  );
}

export default Header;
