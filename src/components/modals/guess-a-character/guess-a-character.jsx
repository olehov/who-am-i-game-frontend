import { useState } from 'react';
import Timer from '../../timer/timer';
import './guess-a-character.scss';

function GuessCharacterModal({ displayModal, setDisplayModal }) {
  const [guess, setGuess] = useState('');

  if (!displayModal) {
    return null;
  }

  return (
    <form className="guess-character-modal">
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
        <Timer time={60} inLobby small />
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
          disabled={guess.length < 3}
        >
          I WANT TO GUESS
        </button>
      </div>
    </form>
  );
}

export default GuessCharacterModal;
