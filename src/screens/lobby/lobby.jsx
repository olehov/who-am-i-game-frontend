import Btn from '../../components/btn/btn';
import PlayerCard from '../../components/player-card/player-card';
import LeaveGameModal from '../../components/modals/leave-game/leave-game';
import SelectCharacterModal from '../../components/modals/select-character/select-character';
import Header from '../../components/header/header';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import { useState } from 'react';
import './lobby.scss';

function Lobby() {
  const [showLeaveModal, setLeaveModalActive] = useState(false);
  const [showSuggestModal, setSuggestModal] = useState(false);

  return (
    <ScreenWrapper>
      <div className="input-screen">
        <Header type="game-lobby" />
        <div className="input-screen__player">
          <div className="input-screen__player-card-wrapper">
            {[1, 2, 3, 4].map((num) => (
              <PlayerCard
                key={num}
                avatarClassName={`avatar0${num}`}
                name={`Player ${num}`}
                playerStausClassName={'no'}
                isYou
              />
            ))}
          </div>
          <div className="input-screen__btn-wrapper">
            <Btn
              className={['btn-green-solid', 'btn-large']}
              onClick={() => {
                setSuggestModal(true);
              }}
            >
              Suggest a character
            </Btn>

            <div className="input-screen__demarcation"></div>

            <Btn
              className={['btn-pink-solid', 'btn-large']}
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
