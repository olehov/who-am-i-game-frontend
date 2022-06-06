import { useState } from 'react';
import './select-character.scss';

function SelectCharacterModal({ playerNum, displayModal, setDisplayModal }) {
  const [playerName, setPlayerName] = useState(`Player ${playerNum}`);
  const [characterName, setCharacterName] = useState('');

  if (!displayModal) {
    return null;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDisplayModal(false);
      }}
      className="character-modal-container"
    >
      <div className="character-modal-container__message-container">
        <h3 className="character-modal-container__message-container_message">
          BEFORE WE START
        </h3>
        <div
          className="character-modal-container__message-container_close-btn"
          onClick={() => {
            setDisplayModal(false);
          }}
        />
      </div>
      <div className="character-modal-container__main">
        <input
          className="character-modal-container__main_input"
          type="text"
          value={playerName}
          onInput={(e) => {
            setPlayerName(e.target.value);
          }}
        />
        <input
          className="character-modal-container__main_input"
          type="text"
          placeholder="Suggest a character"
          value={characterName}
          onInput={(e) => {
            setCharacterName(e.target.value);
          }}
        />
        <button
          className="character-modal-container__main_suggest-btn"
          disabled={characterName.length < 3}
          type="submit"
        >
          SUGGEST
        </button>
      </div>
    </form>
  );
}

export default SelectCharacterModal;
