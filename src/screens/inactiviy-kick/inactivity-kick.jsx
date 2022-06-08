import GameTitle from '../../components/game-title/game-title';
import SetGameStatusBtn from '../../components/set-game-status-btn/set-game-status-btn';
import PlayerCard from '../../components/player-card/player-card';
import { useNavigate } from 'react-router-dom';
import './inactivity-kick.scss';

function InactivityKick() {
  const navigate = useNavigate();

  return (
    <div className="inactivity-kick">
      <GameTitle />
      <PlayerCard avatar={'avatar01'} name={'BeanJean'} />
      <h3 className="inactivity-kick__message">
        SORRY, YOU HAVE BEEN KICKED FROM THE GAME DUE TO INACTIVITY
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

export default InactivityKick;
