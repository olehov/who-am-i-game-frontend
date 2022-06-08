import MainLayout from '../../components/main-layout/main-layout';
import UsersContainer from '../../components/users-container/users-container';
import HistoryContainer from '../../components/history-container/history-container';
import GuessCharacterModal from '../../components/modals/guess-a-character/guess-a-character';
import { useState } from 'react';

function PlayPage() {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <MainLayout>
      <GuessCharacterModal
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
      />
      <UsersContainer />
      <HistoryContainer setDisplayModal={setDisplayModal} />
    </MainLayout>
  );
}

export default PlayPage;
