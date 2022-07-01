import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GAME_LOBBY } from '../../../constants/constants';
import Btn from '../../btn/btn';
import './join-lobby.scss';

function JoinLobbyModal({ modalActive, setModalActive }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const password = 'password';

  useEffect(() => {
    return () => {
      setInputValue('');
    };
  }, [modalActive]);

  if (!modalActive) {
    return null;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (inputValue !== password) setError('error');
    else {
      setError('');
      setModalActive(false);
      navigate(GAME_LOBBY);
    }
  };

  const cancelClickHandler = (event) => {
    event.preventDefault();
    setModalActive(false);
    setError('');
  };

  const inputPasswordHandler = (event) => {
    setInputValue(event.target.value);
    setError('');
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
        className={clsx('join-lobby-modal__input-field', error)}
        type="password"
        placeholder="Password"
        onChange={inputPasswordHandler}
      />
      {error && <p className="error-message ">Wrong password</p>}
      <div className="join-lobby-modal__create-container">
        <Btn
          className="btn-green-solid btn-half"
          type="submit"
          disabled={inputValue.length < 3}
        >
          JOIN
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
