import ContainerWrapper from '../container-wrapper/container-wrapper';
import UserItem from '../user-item/user-item';
import './users-container.scss';
import { currentUser, users } from '../../store/mock-data';
import CountdownTimer from '../countdown-timer/countdown-timer';

function UsersContainer() {
  const { character, ...withoutCharacter } = currentUser;

  return (
    <ContainerWrapper className="users">
      <CountdownTimer time={60} />
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
