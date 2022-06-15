import CountdownTimer from '../timer/timer-countdown/timer-countdown';
import PlayerCard from '../player-card/player-card';
import ModalContext from '../../contexts/modal-context';
import './users-container.scss';
import { users } from '../../store/mock-data';
import { useContext } from 'react';

function UsersContainer({ mode }) {
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
      <PlayerCard avatarClassName={'avatar01'} name={'GreenDean'} isYou />
      <hr />
      <div className="users__list">
        {users.map((user) => (
          <PlayerCard
            key={user.id}
            name={user.name}
            avatarClassName={`avatar0${user.id}`}
            assignedCharacter={user.character}
          />
        ))}
      </div>
    </div>
  );
}

export default UsersContainer;
