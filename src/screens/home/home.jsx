import GameTitle from '../../components/game-title/game-title';
import { useNavigate } from 'react-router-dom';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import GameDataContext from '../../contexts/game-data-context';
import { useContext, useEffect, useState } from 'react';
import {
  NUMBER_OF_PLAYERS,
  WAITING_FOR_PLAYERS,
  SUGGESTING_CHARACTERS,
  LOADING,
  LOBBY,
} from '../../constants/constants';
import './home.scss';
import PlayersOnlineTitle from '../../components/players-online-title/players-online-title';
import AfterLogin from './AfterLogin';
import BeforeLogin from './BeforeLogin';

function Homepage() {
  const { gameData, setGameData, playerId } = useContext(GameDataContext);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (gameData.status === WAITING_FOR_PLAYERS) {
      navigate(LOADING);
    } else if (gameData.status === SUGGESTING_CHARACTERS) {
      navigate(LOBBY);
    }
  }, [gameData, navigate]);

  const createGame = async () => {
    try {
      const { data } = await createGame(playerId, NUMBER_OF_PLAYERS);
      sessionStorage.setItem('gameId', data.id);
      setGameData(data);
    } catch (error) {
      //todo: handle errors
    }
  };

  return (
    <ScreenWrapper>
      <GameTitle />
      <PlayersOnlineTitle />
      {isLogin ? (
        <AfterLogin setIsLogin={setIsLogin} createGame={createGame} />
      ) : (
        <BeforeLogin setIsLogin={setIsLogin} createGame={createGame} />
      )}
    </ScreenWrapper>
  );
}

export default Homepage;
