import GameTitle from '../../components/game-title/game-title';
import LeaveGameBtn from '../../components/leave-game-btn/leave-game-btn';
import Timer from '../../components/timer/timer';
import './loading.scss';

function Loading() {
  return (
    <div className="loading">
      <GameTitle />
      <h3 className="loading__queue-number">23 PLAYERS ARE IN QUEUE</h3>
      <h3 className="loading__waiting-message">
        PLEASE WAIT UNTIL WE FIND YOUR OPPONENTS
      </h3>
      <Timer />
      <LeaveGameBtn page={'loading-page'} />
    </div>
  );
}

export default Loading;
