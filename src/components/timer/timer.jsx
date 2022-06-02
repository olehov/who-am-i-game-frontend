import { useState, useEffect } from 'react';
import './timer.scss';

function Timer({ inLobby }) {
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

    return function cleanup() {
      clearTimeout(timer);
    };
  });

  useEffect(() => {
    if (minutes >= 2 && inLobby) {
      alert('You were kicked due to inactivity');
    }
  });

  return (
    <div className="timer">
      <p className={`timer__start ${inLobby ? 'in-lobby' : ''}`}>GAME START</p>
      <div className="timer__time">
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  );
}

export default Timer;
