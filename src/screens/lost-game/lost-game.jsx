import GameTitle from '../../components/game-title/game-title';
import PlayerCard from '../../components/player-card/player-card';
import SetGameStatusBtn from '../../components/set-game-status-btn/set-game-status-btn';
import './lost-game.scss';

function LostGame() {
  return (
    <div className="lost-game-screen">
      <GameTitle />
      <PlayerCard avatar={'avatar01'} name={'GreenDean'} />
      <h3 className="lost-game-screen__message">
        OOPS, YOU HAVE LOST THE GAME.TRY BETTER NEXT TIME. YOUR CHARACTER WAS{' '}
        <span className="lost-game-screen__message-character">
          ANGLINA JLIE
        </span>
      </h3>
      <SetGameStatusBtn>
        <button className="set-game-status-btn">GO TO MAIN MENU</button>
      </SetGameStatusBtn>
    </div>
  );
}

export default LostGame;
