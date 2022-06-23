import UsersContainer from '../../components/users-container/users-container';
import HistoryContainer from '../../components/history-container/history-container';
import GuessCharacterModal from '../../components/modals/guess-a-character/guess-a-character';
import Header from '../../components/header/header';
import { useState } from 'react';
import ModalContext from '../../contexts/modal-context';
import './play-page.scss';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';

function PlayPage() {
  const [displayModal, setDisplayModal] = useState(false);
  const [mode, setMode] = useState('ask');

  return (
    <ScreenWrapper className="lobby-screen">
      <Header type="play-game" />
      <div className="content_wrapper">
        <ModalContext.Provider value={[displayModal, setDisplayModal]}>
          <UsersContainer mode={mode} />
          <HistoryContainer mode={mode} setMode={setMode} />
          <GuessCharacterModal
            displayModal={displayModal}
            setDisplayModal={setDisplayModal}
          />
        </ModalContext.Provider>
      </div>
    </ScreenWrapper>
  );
}

export default PlayPage;

/*
---------Modes-----------
'ask' - ask a question
'answer' - answer a question (3 buttons)
'guess' - answer a quessing question (2 buttons)
'wait' - waiting for response from other prayers after giving an answer
'response' - giving a response for the question ('yes' or 'no')
*/
