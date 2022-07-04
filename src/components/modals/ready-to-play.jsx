import Btn from '../btn/btn';
import './modal.scss';

function ReadyToPlayModal({ active, setActive, setLeaveActive }) {
  if (!active) {
    return null;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setActive(false);
  };

  return (
    <form onSubmit={onSubmitHandler} className="modal">
      <div className="modal__title-container">
        <h3 className="modal__title-container_title">STARTING THE GAME</h3>
        <button
          className="modal__title-container_close-btn"
          onClick={(e) => {
            e.preventDefault();
            setActive(false);
          }}
        />
      </div>
      <div>
        <p className="modal__question">Lobby owner started a game.</p>
        <p className="modal__question">Are you ready?</p>
      </div>
      <div className="modal__buttons-container">
        <Btn type="submit" className="btn-green-solid">
          I'M READY
        </Btn>
        <Btn
          className="btn-pink-solid"
          onClick={(e) => {
            e.preventDefault();
            setActive(false);
            setLeaveActive(true);
          }}
        >
          LEAVE
        </Btn>
      </div>
    </form>
  );
}

export default ReadyToPlayModal;
