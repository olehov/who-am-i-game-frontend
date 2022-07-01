import Btn from '../../btn/btn';
import './ready-to-play.scss';

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
    setModalActive(false);
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
      <div>
        <p className="modal-container__question">Lobby owner started a game.</p>
        <p className="modal-container__question">Are you ready?</p>
      </div>
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
