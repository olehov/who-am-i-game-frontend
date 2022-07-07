import UsersContainer from '../../components/users-container/users-container';
import HistoryContainer from '../../components/history-container/history-container';
import GuessCharacterModal from '../../components/modals/guess-a-character';
import Header from '../../components/header/header';
import { useContext, useState } from 'react';
import ModalContext from '../../contexts/modal-context';
import './play-page.scss';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import { askQuestion } from '../../services/games-service';
import GameDataContext from '../../contexts/game-data-context';
import { ANSWERING, ASKING } from '../../constants/constants';
import useGameData from '../../hooks/useGameData';

function PlayPage() {
  const { gameData, playerId } = useContext(GameDataContext);
  const [active, setActive] = useState(false);
  const [mode, setMode] = useState(
    gameData.currentTurn === playerId ? ASKING : ANSWERING
  );

  const { currentPlayer, playersWithoutCurrent } = useGameData();

  const submitGuess = (event, guess) => {
    event.preventDefault();
    askQuestion(playerId, gameData.id, guess);
    setActive(false);
  };

  return (
    <ScreenWrapper className="lobby-screen">
      <Header type="play-game" />
      <div className="content_wrapper">
        <ModalContext.Provider value={[active, setActive]}>
          <UsersContainer
            mode={mode}
            currentPlayer={currentPlayer}
            players={playersWithoutCurrent}
          />
          <HistoryContainer mode={mode} setMode={setMode} />
          <GuessCharacterModal
            active={active}
            onSubmit={submitGuess}
            onCancel={() => setActive(false)}
          />
        </ModalContext.Provider>
      </div>
    </ScreenWrapper>
  );
}

export default PlayPage;

/*
---------Modes-----------
ASLING - ask a question
ANSWERING - answer a question (3 buttons)
GUESSING - answer a quessing question (2 buttons)
WAITING - waiting for response from other prayers after giving an answer
RESPONSE - giving a response for the question ('yes' or 'no')
*/
