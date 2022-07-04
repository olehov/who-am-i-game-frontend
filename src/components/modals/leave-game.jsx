import GameDataContext from '../../contexts/game-data-context';
import { useContext } from 'react';
import './modal.scss';
import Btn from '../btn/btn';
import { leaveGame } from '../../services/games-service';
import { useNavigate } from 'react-router-dom';

function LeaveGameModal({ active, setActive }) {
  const { gameData, playerId, resetData } = useContext(GameDataContext);
  const navigate = useNavigate();

  if (!active) {
    return null;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    leaveGame(playerId, gameData.data.id);
    resetData();
    navigate('/');
  };

  return (
    <form onSubmit={onSubmitHandler} className="modal">
      <div className="modal__title-container">
        <h3 className="modal__title-container_title">LEAVE THE GAME</h3>
        <button
          className="modal__title-container_close-btn"
          onClick={(e) => {
            e.preventDefault();
            setActive(false);
          }}
        />
      </div>
      <p className="modal__question">
        Are you sure you want to leave the game?
      </p>
      <div className="modal__buttons-container">
        <Btn type="submit" className="btn-pink-solid">
          LEAVE
        </Btn>
        <Btn
          className="modal__cancel-btn"
          onClick={(e) => {
            e.preventDefault();
            setActive(false);
          }}
        >
          CANCEL
        </Btn>
      </div>
    </form>
  );
}

export default LeaveGameModal;
