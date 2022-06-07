import Btn from '../btn/btn';
import Header from '../header/header';
import './main-layout.scss';

function MainLayout(props) {
  return (
    <div className="layout">
      <Header>
        {props.timer ? (
          <div>timer</div>
        ) : (
          <Btn className="btn-leave-game">Leave game</Btn>
        )}
      </Header>
      <div className="content_wrapper">{props.children}</div>
    </div>
  );
}

export default MainLayout;
