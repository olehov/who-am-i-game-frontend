import { useState, useContext } from 'react';
import Spinner from '@atlaskit/spinner';
import { checkPlayerStatus } from '../../services/games-service';
import GameDataContext from '../../contexts/game-data-context';
import './players-online-title.scss';
import useInterval from '../../hooks/useInterval';

function PlayerSesion() {
  const { playerId } = useContext(GameDataContext);
  const [playerNum, setPlayerNum] = useState();

  // useInterval(async () => {
  //   checkPlayerStatus(playerId);
  // }, 60000);

  return (
    <span className="players-sesion">
      {playerNum ?? <Spinner appearance="invert" />}{' '}
      {playerNum > 1 ? 'Players' : 'Player'} Online
    </span>
  );
}

export default PlayerSesion;
