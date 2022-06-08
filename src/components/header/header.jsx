import './header.scss';

function Header({ children }) {
  return (
    <header className="header">
      <h1>Who am I</h1>
      {children}
    </header>
  );
}

export default Header;
