import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Btn from '../../btn/btn';
import './create-new-lobby.scss';

function CreateNewLobbyModal({ displayModal, setDisplayModal }) {
  const [theme, setTheme] = useState('');
  const [number, setNumber] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      setTheme('');
      setNumber('');
    };
  }, [displayModal]);

  if (!displayModal) {
    return null;
  }

  return (
    <form
      className="create-lobby-modal"
      onSubmit={(e) => {
        e.preventDefault();
        setDisplayModal(false);
        navigate('/main-lobby');
      }}
    >
      <div className="create-lobby-modal__title-container">
        <h3 className="create-lobby-modal__title-container_title">
          CREATE NEW LOBBY
        </h3>
        <div
          className="create-lobby-modal__title-container_close-btn"
          onClick={() => {
            setDisplayModal(false);
          }}
        ></div>
      </div>
      <input
        className="create-lobby-modal__input-field"
        type="text"
        placeholder="Lobby theme"
        value={theme}
        onChange={(e) => {
          setTheme(e.target.value);
        }}
      />
      <input
        className="create-lobby-modal__input-field"
        type="text"
        placeholder="Number of players"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <div className="create-lobby-modal__checkbox">
        <input id="lobbyType" type="checkbox" value="Private" />
        <label htmlFor="lobbyType">Private lobby</label>
      </div>
      <div className="create-lobby-modal__create-container">
        <Btn className="btn-green-solid btn-half btn-large" type="submit">
          CREATE
        </Btn>
        <Btn
          className="create-lobby-modal__cancel-btn btn-half btn-large"
          onClick={(e) => {
            e.preventDefault();
            setDisplayModal(false);
          }}
        >
          CANCEL
        </Btn>
      </div>
    </form>
  );
}

export default CreateNewLobbyModal;
