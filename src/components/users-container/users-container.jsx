import ContainerWrapper from '../container-wrapper/container-wrapper';
import UserItem from '../user-item/user-item';
import './users-container.scss';

function UsersContainer(props) {
  return (
    <ContainerWrapper className="users">
      <UserItem
        user={{ name: 'GreenDean', character: 'This is you' }}
        className="current_user"
      />
      <hr />
      <div className="list">
        <UserItem user={{ name: 'Khalilormous', character: 'Orlando Bloom' }} />
        <UserItem user={{ name: 'KayPee', character: 'Geoffrey Rush' }} />
        <UserItem user={{ name: 'Ted_Read', character: 'Dwayne Johnson' }} />
      </div>
    </ContainerWrapper>
  );
}

export default UsersContainer;
