import Header from '../header/header';
import './main-layout.scss';

function MainLayout(props) {
  return (
    <div className="layout">
      <Header />
      <div className="content_wrapper">{props.children}</div>
    </div>
  );
}

export default MainLayout;
