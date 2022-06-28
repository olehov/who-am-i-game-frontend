import './players-online-title.scss';

function PlayersOnlineTitle({ playerNum = 1 }) {
  return (
    <span className="players-online">
      {playerNum} {playerNum > 1 ? 'Players' : 'Player'} Online
    </span>
  );
}

export default PlayersOnlineTitle;
