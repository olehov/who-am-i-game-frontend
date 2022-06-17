import GameTitle from '../../components/game-title/game-title';
import PlayerCard from '../../components/player-card/player-card';
import { useNavigate } from 'react-router-dom';
import './victory-screen.scss';
import Btn from '../../components/btn/btn';

function Victory() {
  const navigate = useNavigate();

  return (
    <div className="victory-screen">
      <GameTitle />
      <PlayerCard avatarClassName={'avatar01'} name={'GreenDean'} />
      <h3 className="victory-screen__message">
        CONGRATULATIONS. YOU HAVE WON THE GAME
      </h3>
      <Btn
        onClick={() => {
          navigate('/');
        }}
        className="btn-blue-outline"
      >
        GO TO MAIN MENU
      </Btn>
    </div>
  );
}

export default Victory;
