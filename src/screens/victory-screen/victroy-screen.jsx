import GameTitle from '../../components/game-title/game-title';
import PlayerCard from '../../components/player-card/player-card';
import SetGameStatusBtn from '../../components/set-game-status-btn/set-game-status-btn';
import './victory-screen.scss';

function Victory() {
  return (
    <div className="victory-screen">
      <GameTitle />
      <PlayerCard avatar={'avatar01'} name={'GreenDean'} />
      <h3 className="victory-screen__message">
        CONGRATULATIONS. YOU HAVE WON THE GAME
      </h3>
      <SetGameStatusBtn>
        <button className="set-game-status-btn">GO TO MAIN MENU</button>
      </SetGameStatusBtn>
    </div>
  );
}

export default Victory;
