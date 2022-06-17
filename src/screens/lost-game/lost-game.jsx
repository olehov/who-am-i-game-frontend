import GameTitle from '../../components/game-title/game-title';
import PlayerCard from '../../components/player-card/player-card';
import { useNavigate } from 'react-router-dom';
import './lost-game.scss';
import Btn from '../../components/btn/btn';

function LostGame() {
  const navigate = useNavigate();

  return (
    <div className="lost-game-screen">
      <GameTitle />
      <PlayerCard avatarClassName={'avatar01'} name={'GreenDean'} />
      <h3 className="lost-game-screen__message">
        OOPS, YOU HAVE LOST THE GAME.TRY BETTER NEXT TIME. YOUR CHARACTER WAS{' '}
        <span className="lost-game-screen__message-character">
          ANGLINA JLIE
        </span>
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

export default LostGame;
