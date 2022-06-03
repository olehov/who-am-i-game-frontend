import MainLayout from '../../components/main-layout/main-layout';
import UsersContainer from '../../components/users-container/users-container';
import HistoryContainer from '../../components/history-container/history-container';

function PlayPage() {
  return (
    <MainLayout button>
      <UsersContainer />
      <HistoryContainer />
    </MainLayout>
  );
}

export default PlayPage;
