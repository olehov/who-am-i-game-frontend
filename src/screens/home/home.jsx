import GameTitle from '../../components/game-title/game-title';
import Btn from '../../components/btn/btn';
import { useNavigate } from 'react-router-dom';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import GameDataContext from '../../contexts/game-data-context';
import { useContext, useEffect, useRef } from 'react';
import { createGame, getAllPlayersCount } from '../../services/games-service';
import {
  WAITING_FOR_PLAYERS,
  SUGGESTING_CHARACTERS,
  NUMBER_OF_PLAYERS,
} from '../../constants/constants';
import './home.scss';
import { useState } from 'react';

function Homepage() {
  const { gameData, setGameData, playerId } = useContext(GameDataContext);
  const [playerNum, setPlayerNum] = useState('?');
  const navigate = useNavigate();

  useInterval(async () => {
    setPlayerNum(await (await getAllPlayersCount(playerId)).data);
  }, 1000 * 5);

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
          setGameData(await createGame(playerId, NUMBER_OF_PLAYERS));
        }}
      >
        PLAY QUICK GAME
      </Btn>
    </ScreenWrapper>
  );
}

export default Homepage;
export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);

      return () => clearInterval(id);
    }
  }, [delay]);
};
