import { useNavigate } from 'react-router-dom';
import './set-game-status-btn.scss';

function SetGameStatusBtn({ children }) {
  const navigate = useNavigate();

  return (
    <button
      className="set-game-status-btn"
      onClick={() => {
        navigate(children === 'PLAY QUICK GAME' ? 'loading' : '../');
      }}
    >
      {children}
    </button>
  );
}

export default SetGameStatusBtn;
