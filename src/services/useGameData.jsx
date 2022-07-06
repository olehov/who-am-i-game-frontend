import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  // LOBBY,
  PLAY,
  PROCESSING_QUESTION,
  // SUGGESTING_CHARACTERS,
} from '../constants/constants';
import GameDataContext from '../contexts/game-data-context';
import { findGameById } from './games-service';

function useGameData() {
  const { gameData, setGameData, resetData, playerId } =
    useContext(GameDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const checkStatus = setTimeout(async () => {
      const gameId = gameData.id || sessionStorage.getItem('gameId');
      const userId = playerId || sessionStorage.getItem('playerId');

      const data = (await findGameById(userId, gameId)).data;
      setGameData(data);
    }, 1000);

    return () => clearTimeout(checkStatus);
  });

  useEffect(() => {
    if (!gameData.id && !sessionStorage.getItem('gameId')) {
      resetData();
      navigate('/');
    }

    // if (gameData.status === SUGGESTING_CHARACTERS) {
    //   navigate(LOBBY);
    // }

    if (gameData.status === PROCESSING_QUESTION) {
      navigate(PLAY);
    }
  }, [gameData, resetData, navigate]);
}

export default useGameData;
