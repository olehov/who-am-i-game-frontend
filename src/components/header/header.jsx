import GameTitle from '../game-title/game-title';
import Btn from '../btn/btn';
import LeaveGameModal from '../modals/leave-game';
import CountdownTimer from '../timer/timer-countdown/timer-countdown';
import clsx from 'clsx';
import { useState } from 'react';
import './header.scss';
import CreateNewLobbyModal from '../modals/create-new-lobby';

function Header({ type, lobby, startGame }) {
  const [leaveModalActive, setLeaveModalActive] = useState(false);
  const [createModalActive, setCreateModalActive] = useState(false);

  return (
    <header className="game-header">
      <GameTitle className={'small'} />
      {type === 'game-lobby' && (
        <>
          <div className="game-header__title">SUGGEST A CHARACTER</div>
          <div className="game-header__timer-wrapper">
            <CountdownTimer
              inLobby={clsx({ 'in-lobby': type === 'game-lobby' })}
              time={120}
            />
          </div>
        </>
      )}
      {type === 'lobbies' && (
        <>
          <div>LOBBIES</div>
          <div className="create-btn-wrapper">
            <Btn
              className="btn-green-solid"
              onClick={() => setCreateModalActive(true)}
            >
              CREATE NEW LOBBY
            </Btn>
          </div>

          <CreateNewLobbyModal
            active={createModalActive}
            setActive={setCreateModalActive}
          />
        </>
      )}

      {type === 'play-game' && (
        <>
          <div className="game-header__leave-btn-wrapper">
            <Btn
              className={['btn-pink-solid', 'btn-rounded']}
              onClick={() => setLeaveModalActive(true)}
            >
              LEAVE GAME
            </Btn>
          </div>

          <LeaveGameModal
            active={leaveModalActive}
            setActive={setLeaveModalActive}
          />
        </>
      )}

      {type === 'lobby' && (
        <>
          {startGame && (
            <CountdownTimer
              time={15}
              inLobby
              small={'v-small'}
              colored={'colored'}
            />
          )}
          <div className="game-header__title">LOBBY:{lobby}</div>
        </>
      )}
    </header>
  );
}

export default Header;
