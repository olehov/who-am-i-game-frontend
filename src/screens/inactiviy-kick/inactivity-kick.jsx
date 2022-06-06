import GameTitle from '../../components/game-title/game-title';
import SetGameStatusBtn from '../../components/set-game-status-btn/set-game-status-btn';
import './inactivity-kick.scss';

function InactivityKick() {
  return (
    <div className="inactivity-kick">
      <GameTitle />
      <p className="inactivity-kick__player">Green Dean</p>
      <h3 className="inactivity-kick__message">
        SORRY, YOU HAVE BEEN KICKED FROM THE GAME DUE TO INACTIVITY
      </h3>
      <SetGameStatusBtn>PLAY QUICK GAME</SetGameStatusBtn>
    </div>
  );
}

export default InactivityKick;
