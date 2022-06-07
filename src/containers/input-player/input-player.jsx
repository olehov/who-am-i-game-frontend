import Btn from '../../components/btn/btn';
import PlayerCard from '../../components/player-card/player-card';
import './input-player.scss';

function InputPlayer() {
  return (
    <div className="input-player">
      <div className="player-card-wrapp">
        <PlayerCard
          avatarClassName="avatar01"
          name="Player 1"
          description="this is you"
          playerStausClassName="yes"
        />
        <PlayerCard
          avatarClassName="avatar02"
          name="Player 2"
          playerStausClassName="no"
        />
        <PlayerCard
          avatarClassName="avatar03"
          name="Player 3"
          playerStausClassName="dont-know"
        />
        <PlayerCard
          avatarClassName="avatar04"
          name="Player 4"
          playerStausClassName="dont-know"
        />
      </div>
      <div className="btn-wrapp">
        <Btn>Suggest a character</Btn>
        <Btn className={'btn-pink-solid'}>Leave Game</Btn>
      </div>
    </div>
  );
}

export default InputPlayer;
