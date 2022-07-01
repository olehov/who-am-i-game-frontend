import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GAME_LOBBY } from '../../../constants/constants';
import Btn from '../../btn/btn';
import './create-new-lobby.scss';

function CreateNewLobbyModal({ modalActive, setModalActive }) {
  const [theme, setTheme] = useState('');
  const [number, setNumber] = useState('');
  const [privateLobby, setPrivateLobby] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      setTheme('');
      setNumber('');
      setPrivateLobby(false);
    };
  }, [modalActive]);

  if (!modalActive) {
    return null;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setModalActive(false);
    navigate(GAME_LOBBY);
  };

  const cancelClickHandler = (e) => {
    e.preventDefault();
    setModalActive(false);
  };

  return (
    <form className="create-lobby-modal" onSubmit={onSubmitHandler}>
      <div className="create-lobby-modal__title-container">
        <h3 className="create-lobby-modal__title-container_title">
          CREATE NEW LOBBY
        </h3>
        <div
          className="create-lobby-modal__title-container_close-btn"
          onClick={cancelClickHandler}
        ></div>
      </div>
      <select
        name="lobbyTheme"
        className="create-lobby-modal__select-field"
        onChange={(event) => {
          setTheme(event.target.value);
        }}
      >
        <option className="d-none" value="">
          Lobby theme
        </option>
        <option value="Actors">Actors</option>
        <option value="Astronauts">Astronauts</option>
        <option value="Superheroes">Superheroes</option>
      </select>
      <select
        name="numberOfPlayers"
        className="create-lobby-modal__select-field"
        onChange={(event) => {
          setNumber(event.target.value);
        }}
      >
        <option className="d-none" value="">
          Number of players
        </option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <div className="create-lobby-modal__checkbox">
        <input
          id="lobbyType"
          className="checkbox-input"
          type="checkbox"
          value="Private"
          onChange={() => setPrivateLobby((state) => !state)}
        />
        <label htmlFor="lobbyType" className={privateLobby.toString()}>
          Private lobby
        </label>
      </div>
      {privateLobby && (
        <input
          className="create-lobby-modal__input-field"
          type="password"
          placeholder="Password"
        />
      )}
      <div className="create-lobby-modal__create-container">
        <Btn
          className="btn-green-solid btn-half"
          type="submit"
          disabled={!theme || !number}
        >
          CREATE
        </Btn>
        <Btn
          className="create-lobby-modal__cancel-btn btn-half"
          onClick={cancelClickHandler}
        >
          CANCEL
        </Btn>
      </div>
    </form>
  );
}

export default CreateNewLobbyModal;
