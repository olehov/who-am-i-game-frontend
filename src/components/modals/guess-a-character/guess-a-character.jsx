import { useState } from 'react';
import CountdownTimer from '../../timer/timer-countdown/timer-countdown';
import Btn from '../../btn/btn';
import './guess-a-character.scss';

function GuessCharacterModal({ displayModal, setDisplayModal }) {
  const [guess, setGuess] = useState('');

  if (!displayModal) {
    return null;
  }

  return (
    <form
      className="guess-character-modal"
      onSubmit={(e) => {
        e.preventDefault();
        setDisplayModal(false);
      }}
    >
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
        <CountdownTimer time={60} inLobby={'in-lobby'} small={'v-small'} />
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
      <div className="guess-character-modal__guess-container">
        <Btn
          btnStyle="btn-yellow-solid"
          disabled={guess.length < 3}
          type="submit"
        >
          I WANT TO GUESS
        </Btn>
      </div>
    </form>
  );
}

export default GuessCharacterModal;
