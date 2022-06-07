import { useState, useEffect } from 'react';
import convertTime from '../../helper-functions/convert-time';
import './timer.scss';

function Timer({ time = 0 }) {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return function cleanup() {
      clearTimeout(timer);
    };
  });

  return (
    <div className="timer">
      <p className="timer__start">GAME START</p>
      <div className="timer__time">{convertTime(seconds)}</div>
    </div>
  );
}

export default Timer;
