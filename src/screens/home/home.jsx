import GameTitle from '../../components/game-title/game-title';
import { useNavigate } from 'react-router-dom';
import './home.scss';
import Btn from '../../components/btn/btn';

function Homepage() {
  const navigate = useNavigate();
  const playersNumber = 97;

  return (
    <div className="homepage">
      <GameTitle />
      <span className="homepage__players_online">
        {playersNumber} {playersNumber > 1 ? 'Players' : 'Player'} Online
      </span>
      <Btn
        onClick={() => {
          navigate('loading');
        }}
        className="btn-blue-outline"
      >
        PLAY QUICK GAME
      </Btn>
    </div>
  );
}

export default Homepage;
