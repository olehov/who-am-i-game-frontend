import './leave-game.scss';
import Btn from '../../btn/btn';

function ReadyToPlayModal({
  modalActive,
  setModalActive,
  setLeaveModalActive,
}) {
  if (!modalActive) {
    return null;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler} className="modal-container">
      <div className="modal-container__title-container">
        <h3 className="modal-container__title">STARTING THE GAME</h3>
        <button
          className="modal-container__cross-btn"
          onClick={(e) => {
            e.preventDefault();
            setModalActive(false);
          }}
        />
      </div>
      <p className="modal-container__question">Lobbyowner started a game.</p>
      <p className="modal-container__question">Are you ready?</p>
      <div className="modal-container__selector-container">
        <Btn type="submit" className="btn-green-solid">
          I'M READY
        </Btn>
        <Btn
          className="btn-pink-solid"
          onClick={(e) => {
            e.preventDefault();
            setModalActive(false);
            setLeaveModalActive(true);
          }}
        >
          LEAVE
        </Btn>
      </div>
    </form>
  );
}

export default ReadyToPlayModal;
