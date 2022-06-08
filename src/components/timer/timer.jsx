import { useState, useEffect } from 'react';
import convertTime from '../../helper-functions/convert-time';
import { useNavigate } from 'react-router-dom';
import './timer.scss';

function Timer({ time = 0 }) {
  const [seconds, setSeconds] = useState(time);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return function cleanup() {
      clearTimeout(timer);
    };
  });

  if (seconds === 4) {
    navigate('../lobby');
  }

  return (
    <div className="timer">
      <p className="timer__start">GAME START</p>
      <div className="timer__time">{convertTime(seconds)}</div>
    </div>
  );
}

export default Timer;
