import UsersContainer from '../../components/users-container/users-container';
import HistoryContainer from '../../components/history-container/history-container';
import GuessCharacterModal from '../../components/modals/guess-a-character/guess-a-character';
import Header from '../../components/header/header';
import { useState } from 'react';
import ModalContext from '../../contexts/modal-context';
import './play-page.scss';

function PlayPage() {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <div className="layout">
      <Header />
      <div className="content_wrapper">
        <ModalContext.Provider value={[displayModal, setDisplayModal]}>
          <UsersContainer />
          <HistoryContainer />
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
