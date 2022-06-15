import Btn from '../../components/btn/btn';
import PlayerCard from '../../components/player-card/player-card';
import LeaveGameModal from '../../components/modals/leave-game/leave-game';
import SelectCharacterModal from '../../components/modals/select-character/select-character';
import Header from '../../components/header/header';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './lobby.scss';

function Lobby() {
  const [showLeaveModal, setLeaveModalActive] = useState(false);
  const [showSuggestModal, setSuggestModal] = useState(false);

  return (
    <ScreenWrapper>
      <div className="input-screen">
        <Header inLobby />
        <div className="input-screen__player">
          <div className="input-screen__player-card-wrapper">
            {[1, 2, 3, 4].map((num) => (
              <PlayerCard
                key={uuidv4()}
                avatarClassName={`avatar0${num}`}
                name={`Player ${num}`}
                playerStausClassName={'no'}
                isYou
              />
            ))}
          </div>
          <div className="input-screen__btn-wrapper">
            <Btn
              className={'lobby-green'}
              onClick={() => {
                setSuggestModal(true);
              }}
            >
              Suggest a character
            </Btn>
            <div className="input-screen__demarcation"></div>
            <Btn
              className={'btn-leave-game-lobby'}
              onClick={() => setLeaveModalActive(true)}
            >
              LEAVE GAME
            </Btn>
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
    </ScreenWrapper>
  );
}

export default Lobby;
