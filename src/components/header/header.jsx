import GameTitle from '../game-title/game-title';
import Btn from '../btn/btn';
import LeaveGameModal from '../modals/leave-game/leave-game';
import CountdownTimer from '../timer/timer-countdown/timer-countdown';
import clsx from 'clsx';
import { useState } from 'react';
import './header.scss';

function Header({ inLobby }) {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <header className="game-header">
      <GameTitle className={'small'} />
      {inLobby ? (
        <CountdownTimer inLobby={clsx({ 'in-lobby': inLobby })} />
      ) : (
        <>
          <div className="game-header__leave-btn-wrapper">
            <Btn
              className={['btn-pink-solid', 'btn-rounded']}
              onClick={() => setDisplayModal(true)}
            >
              LEAVE GAME
            </Btn>
          </div>
          <LeaveGameModal
            showModal={displayModal}
            setModalActive={setDisplayModal}
          />
        </>
      )}
    </header>
  );
}

export default Header;
