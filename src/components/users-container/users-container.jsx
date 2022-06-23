import CountdownTimer from '../timer/timer-countdown/timer-countdown';
import PlayerCard from '../player-card/player-card';
import ModalContext from '../../contexts/modal-context';
import './users-container.scss';
import { useContext } from 'react';

function UsersContainer({ mode, currentPlayer, players }) {
  const modalActive = useContext(ModalContext)[0];

  return (
    <div className="users">
      <div className="users__timer-container">
        <p className="users__turn">TURN TIME</p>
        <CountdownTimer
          small={'v-small'}
          time={mode === 'guess' || mode === 'answer' ? 20 : 60}
          paused={modalActive}
        />
      </div>
      {currentPlayer && (
        <PlayerCard
          className="in-users-container"
          avatarClassName={'avatar01'}
          name={currentPlayer.player.name}
          isYou
        />
      )}
      <hr />
      <div className="users__list">
        {players ? (
          players.map((player, index) => (
            <PlayerCard
              className="in-users-container"
              key={player.player.name}
              name={`Player ${index + 2}`}
              avatarClassName={`avatar0${index + 2}`}
              assignedCharacter={player.player.character}
            />
          ))
        ) : (
          <h1>Something went wrong</h1>
        )}
      </div>
    </div>
  );
}

export default UsersContainer;
