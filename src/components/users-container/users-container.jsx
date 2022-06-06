import ContainerWrapper from '../container-wrapper/container-wrapper';
import CountdownTimer from '../timer/timer-countdown/timer-countdown';
import UserItem from '../user-item/user-item';
import './users-container.scss';

function UsersContainer() {
  return (
    <ContainerWrapper className="users">
      <div className="users__timer-container">
        <p className="users__turn">TURN TIME</p>
        <CountdownTimer small={'v-small'} time={60} />
      </div>
      <UserItem
        user={{ name: 'GreenDean', character: 'This is you' }}
        className="current_user"
      />
      <hr />
      <div className="users_list">
        <UserItem user={{ name: 'Khalilormous', character: 'Orlando Bloom' }} />
        <UserItem user={{ name: 'KayPee', character: 'Geoffrey Rush' }} />
        <UserItem user={{ name: 'Ted_Read', character: 'Dwayne Johnson' }} />
      </div>
    </ContainerWrapper>
  );
}

export default UsersContainer;
