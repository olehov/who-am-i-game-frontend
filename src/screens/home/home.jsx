import SetGameStatusBtn from '../../components/set-game-status-btn/set-game-status-btn';
import GameTitle from '../../components/game-title/game-title';
import './home.scss';

function Homepage() {
  const playersNumber = 97;

  return (
    <div className="homepage">
      <GameTitle />
      <SetGameStatusBtn />
      <span className="homepage__players_online">
        {playersNumber} {playersNumber > 1 ? 'Players' : 'Player'} Online
      </span>
    </div>
  );
}

export default Homepage;
