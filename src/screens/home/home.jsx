import GameTitle from '../../components/game-title/game-title';
import Btn from '../../components/btn/btn';
import { useNavigate } from 'react-router-dom';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import './home.scss';

function Homepage() {
  const navigate = useNavigate();
  const playersNumber = 97;

  return (
    <ScreenWrapper>
      <GameTitle />
      <span className="players-online">
        {playersNumber} {playersNumber > 1 ? 'Players' : 'Player'} Online
      </span>
      <Btn
        className={'btn-blue-outline'}
        onClick={() => {
          navigate('loading');
        }}
      >
        PLAY QUICK GAME
      </Btn>
    </ScreenWrapper>
  );
}

export default Homepage;
