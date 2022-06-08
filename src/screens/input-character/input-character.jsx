import Btn from '../../components/btn/btn';
import PlayerCard from '../../components/player-card/player-card';
import GameTitle from '../../components/game-title/game-title';
import CountdownTimer from '../../components/timer/timer-countdown/timer-countdown';
import LeaveGameBtn from '../../components/leave-game-btn/leave-game-btn';
import LeaveGameModal from '../../components/modals/leave-game/leave-game';
import SelectCharacterModal from '../../components/modals/select-character/select-character';
import { useState } from 'react';
import './input-character.scss';

function Lobby() {
  const [showLeaveModal, setLeaveModalActive] = useState(false);
  const [showSuggestModal, setSuggestModal] = useState(false);

  return (
    <div className="input-screen container">
      <header className="header">
        <GameTitle className={'small'} />
        <CountdownTimer inLobby={'in-lobby'} />
      </header>
      <div className="input-player">
        <div className="player-card-wrapp">
          <PlayerCard
            avatar={'avatar01'}
            name={'Player 1'}
            desription={'this is you'}
            playerStaus="yes"
          />
          <PlayerCard avatar={'avatar02'} name={'Player 2'} playerStaus="no" />
          <PlayerCard
            avatar={'avatar03'}
            name={'Player 3'}
            playerStaus="wait"
          />
          <PlayerCard
            avatar={'avatar04'}
            name={'Player 4'}
            playerStaus="wait"
          />
        </div>
        <div className="btn-wrapp">
          <Btn
            onClick={() => {
              setSuggestModal(true);
            }}
          >
            Suggest a character
          </Btn>
          <LeaveGameBtn
            className={'lobby-page'}
            setModalActive={setLeaveModalActive}
          />
        </div>
      </div>
      <LeaveGameModal
        showModal={showLeaveModal}
        setModalActive={setLeaveModalActive}
      />
      <SelectCharacterModal
        playerNum={1}
        displayModal={showSuggestModal}
        setDisplayModal={setSuggestModal}
      />
    </div>
  );
}

export default Lobby;
