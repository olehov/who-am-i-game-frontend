import './header.scss';

function Header(props) {
  return (
    <header className="header">
      <h1>Who am I</h1>
      {props.children}
    </header>
  );
}

export default Header;
