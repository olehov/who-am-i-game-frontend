import { useState, useEffect } from 'react';
import convertTime from '../../../helper-functions/convert-time';
import clsx from 'clsx';
import '../timer.scss';

function CountdownTimer({ inLobby, time, small }) {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return function cleanup() {
      clearTimeout(timer);
    };
  }, [seconds]);

  useEffect(() => {
    if (inLobby && seconds === 0) {
      alert('You have been kicked out for inactivity');
    }
  });

  console.log(
    clsx('timer__start', {
      inLobby,
      small,
    })
  );

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
        {convertTime(seconds)}
      </div>
    </div>
  );
}

export default CountdownTimer;
