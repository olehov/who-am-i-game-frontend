import ContainerWrapper from '../container-wrapper/container-wrapper';
import CountdownTimer from '../timer/timer-countdown/timer-countdown';
import UserItem from '../user-item/user-item';
import ModalContext from '../../contexts/modal-context';
import './users-container.scss';
import { currentUser, users } from '../../store/mock-data';
import { useContext } from 'react';

function UsersContainer() {
  const { character, ...withoutCharacter } = currentUser;
  const modalActive = useContext(ModalContext)[0];

  return (
    <ContainerWrapper className="users">
      <div className="users__timer-container">
        <p className="users__turn">TURN TIME</p>
        <CountdownTimer small={'v-small'} time={60} modalActive={modalActive} />
      </div>
      <UserItem
        user={{ character: 'This is you', ...withoutCharacter }}
        className="current_user"
      />
      <hr />
      <div className="users_list">
        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    </ContainerWrapper>
  );
}

export default UsersContainer;
