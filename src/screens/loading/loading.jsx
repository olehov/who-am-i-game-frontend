import GameTitle from '../../components/game-title/game-title';
import LeaveGameBtn from '../../components/leave-game-btn/leave-game-btn';
import Timer from '../../components/timer/timer';
import GuessCharacterModal from '../../components/modals/guess-a-character/guess-a-character';
import './loading.scss';
import { useState } from 'react';

function Loading() {
  const [displayModal, setDisplayModal] = useState(true);

  return (
    <div className="loading">
      <GameTitle />
      <h3 className="loading__queue-number">23 PLAYERS ARE IN QUEUE</h3>
      <h3 className="loading__waiting-message">
        PLEASE WAIT UNTIL WE FIND YOUR OPPONENTS
      </h3>
      <Timer time={0} />
      <LeaveGameBtn />
      <GuessCharacterModal
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
      />
    </div>
  );
}

export default Loading;
