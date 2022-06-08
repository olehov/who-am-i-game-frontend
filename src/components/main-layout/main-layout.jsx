import Btn from '../btn/btn';
import Header from '../header/header';
import CountdownTimer from '../timer/timer-countdown/timer-countdown';
import './main-layout.scss';

function MainLayout(props) {
  return (
    <div className="layout">
      <Header>
        {props.timer ? (
          <CountdownTimer inLobby time={120} />
        ) : (
          <Btn className="btn-leave-game">Leave game</Btn>
        )}
      </Header>
      <div className="content_wrapper">{props.children}</div>
    </div>
  );
}

export default MainLayout;
