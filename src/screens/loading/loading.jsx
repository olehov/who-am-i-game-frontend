import GameTitle from '../../components/game-title/game-title';
import Btn from '../../components/btn/btn';
import Timer from '../../components/timer/timer';
import LeaveGameModal from '../../components/modals/leave-game/leave-game';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import { useState } from 'react';
import './loading.scss';

function Loading() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <ScreenWrapper>
      <GameTitle />
      <h3 className="loading__queue-number">23 PLAYERS ARE IN QUEUE</h3>
      <h3 className="loading__waiting-message">
        PLEASE WAIT UNTIL WE FIND YOUR OPPONENTS
      </h3>
      <Timer />
      <Btn
        className={'btn-leave-game-loading'}
        onClick={() => setModalActive(true)}
      >
        LEAVE GAME
      </Btn>
      <LeaveGameModal showModal={modalActive} setModalActive={setModalActive} />
    </ScreenWrapper>
  );
}

export default Loading;
