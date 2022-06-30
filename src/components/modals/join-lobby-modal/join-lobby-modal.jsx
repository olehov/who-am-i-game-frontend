import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MAIN_LOBBY } from '../../../constants/constants';
import Btn from '../../btn/btn';
import './join-lobby.scss';

function JoinLobbyModal({ displayModal, setDisplayModal }) {
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
  }, [displayModal]);

  if (!displayModal) {
    return null;
  }

  const privateChangeHandler = () => {
    setPrivateLobby((state) => !state);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setDisplayModal(false);
    navigate(MAIN_LOBBY);
  };

  const cancelClickHandler = (e) => {
    e.preventDefault();
    setDisplayModal(false);
    navigate(MAIN_LOBBY);
  };

  return (
    <form className="join-lobby-modal" onSubmit={onSubmitHandler}>
      <div className="join-lobby-modal__title-container">
        <h3 className="join-lobby-modal__title-container_title">JOIN LOBBY</h3>
        <div
          className="join-lobby-modal__title-container_close-btn"
          onClick={cancelClickHandler}
        ></div>
      </div>
      <p className="p">This is private lobby: Enter the password</p>
      <input
        className="join-lobby-modal__input-field"
        type="password"
        placeholder="Password"
      />
      <div className="join-lobby-modal__create-container">
        <Btn className="btn-green-solid btn-half" type="submit">
          CREATE
        </Btn>
        <Btn
          className="join-lobby-modal__cancel-btn btn-half"
          onClick={cancelClickHandler}
        >
          CANCEL
        </Btn>
      </div>
    </form>
  );
}

export default JoinLobbyModal;
