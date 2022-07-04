import { useState, useEffect, useContext } from 'react';
import CountdownTimer from '../timer/timer-countdown/timer-countdown';
import Btn from '../btn/btn';
import checkGuess from '../../helper-functions/check-guess.js';
import './modal.scss';
import { submitGuess } from '../../services/games-service';
import GameDataContext from '../../contexts/game-data-context';

function GuessCharacterModal({ active, setActive }) {
  const [guess, setGuess] = useState('');
  const { gameData, playerId } = useContext(GameDataContext);

  useEffect(() => {
    return () => setGuess('');
  }, [active]);

  if (!active) {
    return null;
  }

  return (
    <form
      className="modal"
      onSubmit={(e) => {
        e.preventDefault();
        setActive(false);
        submitGuess(playerId, gameData.data.id, guess);
      }}
    >
      <div className="modal__title-container">
        <h3 className="modal__title-container_title">READY TO GUESS?</h3>
        <div
          className="modal__title-container_close-btn"
          onClick={() => {
            setActive(false);
          }}
        ></div>
      </div>
      <div className="modal__timer-container">
        <p className="modal__timer-container_name">TIME LEFT</p>
        <CountdownTimer time={60} inLobby={'in-lobby'} small={'v-small'} />
      </div>
      <input
        className="modal__input-field"
        type="text"
        placeholder="Enter your guess"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value);
        }}
      />
      <Btn
        className="btn-yellow-solid"
        disabled={checkGuess(guess)}
        type="submit"
      >
        I WANT TO GUESS
      </Btn>
    </form>
  );
}

export default GuessCharacterModal;
