import { Route, Routes } from 'react-router-dom';
import Homepage from './screens/home/home';
import Loading from './screens/loading/loading';
import PlayPage from './screens/play-page/play-page';
import InactivityKick from './screens/inactiviy-kick/inactivity-kick';
import Lobby from './screens/input-character/input-character';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="loading" element={<Loading />} />
        <Route path="lobby" element={<Lobby />} />
        <Route path="play" element={<PlayPage />} />
        <Route path="inactive" element={<InactivityKick />} />
      </Routes>
    </div>
  );
}

export default App;
