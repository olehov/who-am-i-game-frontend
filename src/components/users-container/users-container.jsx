import ContainerWrapper from '../container-wrapper/container-wrapper';
import CountdownTimer from '../timer/timer-countdown/timer-countdown';
import UserItem from '../user-item/user-item';
import useModalActive from '../../hooks/modal-active';
import './users-container.scss';
import { currentUser, users } from '../../store/mock-data';

function UsersContainer() {
  const [active] = useModalActive(false);
  const { character, ...withoutCharacter } = currentUser;

  return (
    <ContainerWrapper className="users">
      <div className="users__timer-container">
        <p className="users__turn">TURN TIME</p>
        {!active && <CountdownTimer small={'v-small'} time={60} />}
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
