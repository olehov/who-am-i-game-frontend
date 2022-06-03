import { useState, useEffect } from 'react';
import clsx from 'clsx';
import './timer.scss';

function Timer({ inLobby, small, time }) {
  const [seconds, setSeconds] = useState(time % 60);
  const [minutes, setMinutes] = useState(
    time / 60 >= 1 ? Math.floor(time / 60) : 0
  );

  useEffect(() => {
    if (inLobby) {
      const timer = setTimeout(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (seconds === 0 && minutes >= 1) {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }, 1000);

      return function cleanup() {
        clearTimeout(timer);
      };
    } else {
      const timer = setTimeout(() => {
        if (seconds < 59) {
          setSeconds(seconds + 1);
        } else {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
      }, 1000);

      return function cleanup() {
        clearTimeout(timer);
      };
    }
  });

  useEffect(() => {
    if (inLobby && seconds === 0 && minutes === 0) {
      alert('You have been kicked out of inactivity');
    }
  });

  return (
    <div className="timer">
      <p
        className={clsx('timer__start', {
          'in-lobby': inLobby,
          'v-small': small,
        })}
      >
        GAME START
      </p>
      <div className={clsx('timer__time', { 'time-small': small })}>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  );
}

export default Timer;
