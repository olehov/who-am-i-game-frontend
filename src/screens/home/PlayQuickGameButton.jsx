import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Btn from '../../components/btn/btn';
import GameDataContext from '../../contexts/game-data-context';
import { LOADING } from '../../constants/constants';
import { createQuickGame } from '../../services/games-service';
import { useState } from 'react';

export default function PlayQuickGameButton() {
  const { setGameData, resetData, playerId } = useContext(GameDataContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onCreateGame = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await createQuickGame(playerId);

      if (data) {
        setGameData(data);
        sessionStorage.setItem('gameId', data.id);
        navigate(LOADING);
      }
    } catch (error) {
      if (error.response.status === 403) {
        resetData();
      }
    }
    setLoading(false);
  }, [setGameData, playerId, navigate, resetData]);

  return (
    <Btn
      disabled={loading}
      className={'btn-blue-outline'}
      onClick={onCreateGame}
    >
      PLAY QUICK GAME
    </Btn>
  );
}
