import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './countdown-timer.scss';

function CountdownTimer(props) {
  const [seconds, setSeconds] = useState(props.time);
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setInterval(() => {
      if (seconds === 0) {
        navigate('/');
      }
      setSeconds((seconds) => seconds - 1);
    }, 1000);

    return () => clearInterval(timerId);
  });

  return (
    <div className="timer">
      <div>turn time</div>
      <div className="time">
        <span>00:</span>
        <span className="time_seconds">
          {seconds < 10 ? `0${seconds}` : `${seconds}`}
        </span>
      </div>
    </div>
  );
}

export default CountdownTimer;
