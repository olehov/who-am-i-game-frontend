import './set-game-status-btn.scss';

function SetGameStatusBtn({ children, onClick }) {
  return (
    <button className="set-game-status-btn" onClick={onClick}>
      {children}
    </button>
  );
}

export default SetGameStatusBtn;
