import SetGameStatusBtn from '../../components/set-game-status-btn/set-game-status-btn';
import GameTitle from '../../components/game-title/game-title';
import { useNavigate } from 'react-router-dom';
import './home.scss';

function Homepage() {
  const navigate = useNavigate();
  const playersNumber = 97;

  return (
    <div className="homepage">
      <GameTitle />
      <span className="homepage__players_online">
        {playersNumber} {playersNumber > 1 ? 'Players' : 'Player'} Online
      </span>
      <SetGameStatusBtn
        onClick={() => {
          navigate('loading');
        }}
      >
        PLAY QUICK GAME
      </SetGameStatusBtn>
    </div>
  );
}

export default Homepage;
