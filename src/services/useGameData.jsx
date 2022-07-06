import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LOBBY,
  PLAY,
  PROCESSING_QUESTION,
  SUGGESTING_CHARACTERS,
} from '../constants/constants';
import GameDataContext from '../contexts/game-data-context';
import { findGameById } from './games-service';

function useGameData() {
  const { gameData, setGameData, playerId } = useContext(GameDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const checkStatus = setTimeout(async () => {
      const gameId = gameData.data.id || sessionStorage.getItem('gameId');
      const userId = playerId || sessionStorage.getItem('playerId');

      if (!gameData.data.id && !sessionStorage.getItem('gameId')) {
        navigate('/');
      }

      if (gameData.data && gameData.data.status === SUGGESTING_CHARACTERS) {
        navigate(LOBBY);
      }

      if (gameData.data && gameData.data.status === PROCESSING_QUESTION) {
        navigate(PLAY);
      }
      setGameData(await findGameById(userId, gameId));
    }, 1000);

    return () => clearTimeout(checkStatus);
  });
}

export default useGameData;
