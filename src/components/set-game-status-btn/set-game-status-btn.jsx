import './set-game-status-btn.scss';

function SetGameStatusBtn({ isOnWaitingScreen }) {
  return (
    <>
      {isOnWaitingScreen ? (
        <button className="set-game-status-btn">PLAY QUICK GAME</button>
      ) : (
        <button className="set-game-status-btn">GO TO MAIN MENU</button>
      )}
    </>
  );
}

export default SetGameStatusBtn;
