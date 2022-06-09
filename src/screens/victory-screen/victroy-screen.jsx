import GameTitle from '../../components/game-title/game-title';
import PlayerCard from '../../components/player-card/player-card';
import SetGameStatusBtn from '../../components/set-game-status-btn/set-game-status-btn';
import { useNavigate } from 'react-router-dom';
import './victory-screen.scss';

function Victory() {
  const navigate = useNavigate();

  return (
    <div className="victory-screen">
      <GameTitle />
      <PlayerCard avatarClassName={'avatar01'} name={'GreenDean'} />
      <h3 className="victory-screen__message">
        CONGRATULATIONS. YOU HAVE WON THE GAME
      </h3>
      <SetGameStatusBtn
        onClick={() => {
          navigate('/');
        }}
      >
        GO TO MAIN MENU
      </SetGameStatusBtn>
    </div>
  );
}

export default Victory;
