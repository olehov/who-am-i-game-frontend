import GameTitle from '../../components/game-title/game-title';
import Btn from '../../components/btn/btn';
import { useNavigate } from 'react-router-dom';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import GameDataContext from '../../contexts/game-data-context';
import { useContext, useEffect } from 'react';
import { createGame } from '../../services/games-service';
import {
  WAITING_FOR_PLAYERS,
  SUGGESTING_CHARACTERS,
} from '../../constants/constants';
import './home.scss';

function Homepage() {
  const { gameData, setGameData, playerId } = useContext(GameDataContext);
  const navigate = useNavigate();
  const playerNum = 97;

  useEffect(() => {
    if (gameData.data.status === WAITING_FOR_PLAYERS) {
      navigate('loading');
    } else if (gameData.data.status === SUGGESTING_CHARACTERS) {
      navigate('lobby');
    }
  }, [gameData, navigate]);

  return (
    <ScreenWrapper>
      <GameTitle />
      <span className="players-online">
        {playerNum} {playerNum > 1 ? 'Players' : 'Player'} Online
      </span>
      <Btn
        className={'btn-blue-outline'}
        onClick={async () => {
          setGameData(await createGame(playerId, 4));
        }}
      >
        PLAY QUICK GAME
      </Btn>
    </ScreenWrapper>
  );
}

export default Homepage;
