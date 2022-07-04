import { useContext, useState } from 'react';
import GameDataContext from '../../contexts/game-data-context';
import { suggestCharacter } from '../../services/games-service';
import Btn from '../btn/btn';
import './modal.scss';

function SelectCharacterModal({ player, active, setActive, setSuggestBtn }) {
  const { gameData, playerId } = useContext(GameDataContext);
  const [playerName, setPlayerName] = useState(player);
  const [characterName, setCharacterName] = useState('');

  if (!active) {
    return null;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        suggestCharacter(playerId, gameData.data.id, playerName, characterName);
        setActive(false);
        setSuggestBtn(false);
      }}
      className="modal"
    >
      <div className="modal__title-container">
        <h3 className="modal__title-container_title">BEFORE WE START</h3>
        <div
          className="modal__title-container_close-btn"
          onClick={() => {
            setActive(false);
          }}
        />
      </div>
      <input
        className="modal__input-field"
        type="text"
        maxLength="50"
        value={playerName}
        onInput={(e) => {
          setPlayerName(e.target.value);
        }}
      />
      <input
        className="modal__input-field"
        type="text"
        placeholder="Suggest a character"
        maxLength="50"
        value={characterName}
        onInput={(e) => {
          setCharacterName(e.target.value);
        }}
      />
      <Btn
        className="btn-green-solid"
        disabled={playerName.length < 3 || characterName.length < 3}
        type="submit"
      >
        SUGGEST
      </Btn>
    </form>
  );
}

export default SelectCharacterModal;
