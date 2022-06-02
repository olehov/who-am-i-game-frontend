import { useState, useEffect } from 'react';
import './guess-a-character.scss';

function GuessCharacterModal({ displayModal, setDisplayModal }) {
  const [seconds, setSeconds] = useState(59);
  const [guess, setGuess] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        setDisplayModal(false);
        alert('time has run out');
      }
    }, 1000);

    return function cleanup() {
      clearTimeout(timer);
    };
  });

  if (!displayModal) {
    return null;
  }

  return (
    <div className="guess-character-modal">
      <div className="guess-character-modal__title-container">
        <h3 className="guess-character-modal__title-container_title">
          READY TO GUESS?
        </h3>
        <div
          className="guess-character-modal__title-container_close-btn"
          onClick={() => {
            setDisplayModal(false);
          }}
        ></div>
      </div>
      <div className="guess-character-modal__timer-container">
        <p className="guess-character-modal__timer-container_name">TIME LEFT</p>
        <p className="guess-character-modal__timer-container_timer">
          0:{seconds > 9 ? seconds : `0${seconds}`}
        </p>
      </div>
      <input
        className="guess-character-modal__players-guess"
        type="text"
        placeholder="Enter your guess"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value);
        }}
      />
      <div>
        <button
          className="guess-character-modal__guess-btn"
          onClick={(e) => {
            setGuess(e.target.value);
          }}
          disabled={guess.length < 3 ? true : false}
        >
          I WANT TO GUESS
        </button>
      </div>
    </div>
  );
}

export default GuessCharacterModal;
