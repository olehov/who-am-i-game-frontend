import SetGameStatusBtn from '../../components/set-game-status-btn/set-game-status-btn';
import GameTitle from '../../components/game-title/game-title';
import './home.scss';

function Homepage() {
  const playersNumber = 97;

  return (
    <div className="homepage">
      <GameTitle />
      <span className="homepage__players_online">
        {playersNumber} {playersNumber > 1 ? 'Players' : 'Player'} Online
      </span>
      <SetGameStatusBtn>PLAY QUICK GAME</SetGameStatusBtn>
    </div>
  );
}

export default Homepage;
