import Btn from '../btn/btn';
import Header from '../header/header';
import './main-layout.scss';

function MainLayout(props) {
  return (
    <div className="layout">
      <Header>
        {props.button && (
          <Btn btnStyle="btn-pink-solid button_leave_game">Leave game</Btn>
        )}
        {props.timer && <div>timer</div>}
      </Header>
      <div className="content_wrapper">{props.children}</div>
    </div>
  );
}

export default MainLayout;
