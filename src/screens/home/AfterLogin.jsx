import Btn from '../../components/btn/btn';

function AfterLogin({ setIsLogin, createGame }) {
  return (
    <div className="after-login-wrapper">
      <div className="profile">
        <div className="profile__title">welcome</div>
        <div className="profile__body">
          <div className="profile__avatar"></div>
          <div className="profile__name">GreenDean</div>
          <div className="profile__edit-icon"></div>
        </div>
      </div>
      <Btn className={'btn-blue-outline'} onClick={createGame}>
        PLAY QUICK GAME
      </Btn>
      <Btn className={'btn-blue-outline'}>Lobbies</Btn>
      <Btn className={'btn-blue-outline'}>profile</Btn>
      <Btn
        className={'btn-pink-outline'}
        onClick={() => {
          setIsLogin(false);
        }}
      >
        log out
      </Btn>
    </div>
  );
}

export default AfterLogin;
