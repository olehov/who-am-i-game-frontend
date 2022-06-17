import GameTitle from '../../components/game-title/game-title';
import PlayerCard from '../../components/player-card/player-card';
import { useNavigate } from 'react-router-dom';
import './inactivity-kick.scss';
import Btn from '../../components/btn/btn';

function InactivityKick() {
  const navigate = useNavigate();

  return (
    <div className="inactivity-kick">
      <GameTitle />
      <PlayerCard avatarClassName={'avatar01'} name={'BeanJean'} />
      <h3 className="inactivity-kick__message">
        SORRY, YOU HAVE BEEN KICKED FROM THE GAME DUE TO INACTIVITY
      </h3>
      <Btn
        onClick={() => {
          navigate('/');
        }}
        className="btn-blue-outline"
      >
        PLAY QUICK GAME
      </Btn>
    </div>
  );
}

export default InactivityKick;
