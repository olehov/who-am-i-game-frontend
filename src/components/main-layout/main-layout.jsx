import Header from '../header/header';
import './main-layout.scss';

function MainLayout({children, HeaderRigthBlock}) {
  return (
    <div className="layout">
      <Header><HeaderRigthBlock /></Header>
      <div className="content_wrapper">{children}</div>
    </div>
  );
}

export default MainLayout;
