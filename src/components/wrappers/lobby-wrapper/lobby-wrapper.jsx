import './lobby-wrapper.scss';

function LobbyWrapper({ children, className }) {
  return <div className="input-screen__player">{children}</div>;
}

export default LobbyWrapper;
