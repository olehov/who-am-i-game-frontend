import MainLayout from '../../components/main-layout/main-layout';
import UsersContainer from '../../components/users-container/users-container';
import HistoryContainer from '../../components/history-container/history-container';
import LeaveGameButton from '../../components/leave-game-button/leave-game-button';

function PlayPage() {
  return (
    <MainLayout HeaderRigthBlock={LeaveGameButton}>
      <UsersContainer />
      <HistoryContainer />
    </MainLayout>
  );
}

export default PlayPage;
