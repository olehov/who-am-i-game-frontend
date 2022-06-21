import GameTitle from '../../components/game-title/game-title';
import Btn from '../../components/btn/btn';
import Timer from '../../components/timer/timer';
import LeaveGameModal from '../../components/modals/leave-game/leave-game';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import { useState, useEffect, useContext } from 'react';
import GameDataContext from '../../contexts/game-data-context';
import { useNavigate } from 'react-router-dom';
import { findGameById } from '../../services/games-service';
import './loading.scss';

function Loading() {
  const { gameData, setGameData, playerId } = useContext(GameDataContext);
  const [modalActive, setModalActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkStatus = setTimeout(async () => {
      setGameData(await findGameById(playerId, gameData.data.id));
    }, 5000);

    return () => clearTimeout(checkStatus);
  });

  useEffect(() => {
    if (
      gameData.data.status ===
      'com.eleks.academy.whoami.core.state.SuggestingCharacters'
    ) {
      navigate('lobby');
    }
  });

  return (
    <ScreenWrapper>
      <GameTitle />
      <h3 className="loading__queue-number">23 PLAYERS ARE IN QUEUE</h3>
      <h3 className="loading__waiting-message">
        PLEASE WAIT UNTIL WE FIND YOUR OPPONENTS
      </h3>
      <Timer />
      <div className="loading__button-wrappper">
        <Btn
          className={['btn-pink-solid', 'btn-large']}
          onClick={() => setModalActive(true)}
        >
          LEAVE GAME
        </Btn>
      </div>
      <LeaveGameModal showModal={modalActive} setModalActive={setModalActive} />
    </ScreenWrapper>
  );
}

export default Loading;
