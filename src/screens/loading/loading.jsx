import { useState, useEffect } from 'react';
import GameTitle from '../../components/game-title/game-title';
import LeaveGameBtn from '../../components/leave-game-btn/leave-game-btn';
import './loading.scss';

function Loading() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (seconds < 60) {
        setSeconds(seconds + 1);
      } else {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);

    return function cleaup() {
      clearTimeout(timer);
    }
  });

  return (
    <div className="loading">
      <GameTitle />
      <h3 className="loading__queue-number">
        23 PLYERS ARE IN A QUEUE
      </h3>
      <h3 className="loading__waiting-message">
        PLEASE WAIT UNTIL WE FIND YOUR OPPONENTS
      </h3>
      <div className="loading__clip-container">
        <p className="loading__clip-container_start">GAME START</p>
        <div className="loading__clip-container_timer">
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </div>
      <LeaveGameBtn />
    </div>
  );
}

export default Loading;
