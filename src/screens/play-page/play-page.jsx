import UsersContainer from '../../components/users-container/users-container';
import HistoryContainer from '../../components/history-container/history-container';
import GuessCharacterModal from '../../components/modals/guess-a-character/guess-a-character';
import Header from '../../components/header/header';
import { useState } from 'react';
import ModalContext from '../../contexts/modal-context';
import './play-page.scss';

function PlayPage() {
  const [displayModal, setDisplayModal] = useState(false);
  const [mode, setMode] = useState('guess');

  return (
    <div className="layout">
      <Header />
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
    </div>
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
