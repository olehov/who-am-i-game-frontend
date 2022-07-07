import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LOBBY,
  PLAY,
  PROCESSING_QUESTION,
  SUGGESTING_CHARACTERS,
} from '../constants/constants';
import GameDataContext from '../contexts/game-data-context';
import { findGameById } from '../services/games-service';

export default function useGameData() {
  const { gameData, setGameData, resetData, playerId } =
    useContext(GameDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const checkStatus = setTimeout(async () => {
      const gameId = gameData.id || sessionStorage.getItem('gameId');
      const userId = playerId || sessionStorage.getItem('playerId');

      const { data } = await findGameById(userId, gameId);

      if (data) setGameData(data);
    }, 1000);

    return () => clearTimeout(checkStatus);
  });

  useEffect(() => {
    if (!gameData.id && !sessionStorage.getItem('gameId')) {
      resetData();
      navigate('/');

      return;
    }

    if (gameData.status === SUGGESTING_CHARACTERS) {
      navigate(LOBBY);

      return;
    }

    if (gameData.status === PROCESSING_QUESTION) {
      navigate(PLAY);

      return;
    }
  }, [gameData, resetData, navigate]);

  const players = gameData.players.map((player, index) => ({
    nickname: player.player.name || `Player ${index + 1}`,
    avatar: `avatar0${index + 1}`,
    ...player,
  }));

  const currentPlayer = players.find((player) => player.player.id === playerId);
  const playersWithoutCurrent = players.filter(
    (player) => player.player.id !== playerId
  );

  return { currentPlayer, playersWithoutCurrent };
}
