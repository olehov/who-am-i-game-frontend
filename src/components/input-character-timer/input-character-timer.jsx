import { useState, useEffect } from 'react';
import { getPad } from '../../utils/getPad';
import './input-character-timer.scss';

function InputCharacterTimer() {
  const [timeLeft, setTimeLeft] = useState(120);

  const minuts = getPad(Math.floor(timeLeft / 60));
  const seconds = getPad(timeLeft - minuts * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="input-timer">
      <div className="lable">Game start</div>
      <div className="timer">
        {minuts}:{seconds}
      </div>
    </div>
  );
}

export default InputCharacterTimer;
