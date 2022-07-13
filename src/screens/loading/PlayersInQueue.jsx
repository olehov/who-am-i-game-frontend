import { useCallback, useContext, useState } from 'react';
import GameDataContext from '../../contexts/game-data-context';
import useInterval from '../../hooks/useInterval';
import { getPlayersInGame } from '../../services/games-service';

export default function PlayersInQueue() {
  const { playerId, gameData } = useContext(GameDataContext);
  const [count, setCount] = useState(0);

  const fetchCount = useCallback(async () => {
    const { data } = await getPlayersInGame(playerId, gameData.id);

    if (data) {
      setCount(data);
    }
  }, [playerId, gameData.id]);

  useInterval(fetchCount, 1000);

  return (
    <h3 className="loading__queue-number">{count} PLAYERS ARE IN QUEUE</h3>
  );
}
