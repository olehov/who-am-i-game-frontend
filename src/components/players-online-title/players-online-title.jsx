import { useEffect, useState, useContext, useRef } from 'react';
import Spinner from '@atlaskit/spinner';
import { getAllPlayersCount } from '../../services/games-service';
import GameDataContext from '../../contexts/game-data-context';
import './players-online-title.scss';

function PlayersOnlineTitle() {
  const { playerId } = useContext(GameDataContext);
  const [playerNum, setPlayerNum] = useState();

  useInterval(async () => {
    setPlayerNum((await getAllPlayersCount(playerId)).data);
  }, 1000 * 5);

  return (
    <span className="players-online">
      {playerNum ?? <Spinner appearance="invert" />}{' '}
      {playerNum > 1 ? 'Players' : 'Player'} Online
    </span>
  );
}

export default PlayersOnlineTitle;

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    if (typeof callback === 'function') savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current != null) {
        savedCallback.current();
      }
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);

      return () => clearInterval(id);
    }
  }, [delay]);
}
