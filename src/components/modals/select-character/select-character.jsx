import { useContext, useState } from 'react';
import GameDataContext from '../../../contexts/game-data-context';
import { suggestCharacter } from '../../../services/games-service';
import Btn from '../../btn/btn';
import './select-character.scss';

function SelectCharacterModal({
  player,
  modalActive,
  setModalActive,
  setSuggestBtn,
}) {
  const { gameData, playerId } = useContext(GameDataContext);
  const [playerName, setPlayerName] = useState(player);
  const [characterName, setCharacterName] = useState('');

  if (!modalActive) {
    return null;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        suggestCharacter(playerId, gameData.data.id, playerName, characterName);
        setModalActive(false);
        setSuggestBtn(false);
      }}
      className="character-modal"
    >
      <div className="character-modal__message-container">
        <h3 className="character-modal__message-container_message">
          BEFORE WE START
        </h3>
        <div
          className="character-modal__message-container_close-btn"
          onClick={() => {
            setModalActive(false);
          }}
        />
      </div>
      <input
        className="character-modal__main_input"
        type="text"
        maxLength="51"
        value={playerName}
        onInput={(e) => {
          setPlayerName(e.target.value);
        }}
      />
      <input
        className="character-modal__main_input"
        type="text"
        placeholder="Suggest a character"
        maxLength="51"
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
