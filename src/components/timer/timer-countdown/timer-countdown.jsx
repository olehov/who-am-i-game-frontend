import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import convertTime from '../../../helper-functions/convert-time';
import clsx from 'clsx';
import '../timer.scss';

function CountdownTimer({ inLobby, time = 60, small, modalActive }) {
  const [seconds, setSeconds] = useState(time);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!modalActive) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    if (seconds <= 0) {
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [modalActive, seconds]);

  useEffect(() => {
    if (seconds === 0) {
      navigate('../inactive');
    }
  });

  return (
    <div className="timer">
      <p className={clsx('timer__start', [inLobby, small])}>GAME START</p>
      <div className={clsx('timer__time', { 'time-small': small })}>
        {convertTime(seconds)}
      </div>
    </div>
  );
}

export default CountdownTimer;
