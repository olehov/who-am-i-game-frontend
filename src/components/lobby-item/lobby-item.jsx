import clsx from 'clsx';
import Btn from '../btn/btn';
import './lobby-item.scss';

function LobbyItem({ className, theme, numberOfPlayers, type, icon }) {
  let btnText = '';

  if (className === 'table-header') {
    btnText = 'RESET FILTERS';
  } else btnText = 'JOIN';

  return (
    <div className={clsx('lobby-item', className)}>
      <div className="lobby-item__info">
        <div className="lobby-item__column">
          {icon && <div className="icon icon-green"></div>}
          {theme}
        </div>
        <div className="lobby-item__column">
          {icon && <div className="icon"></div>}
          {numberOfPlayers}
        </div>
        <div className="lobby-item__column type">
          {icon && <div className="icon"></div>}
          {type}
        </div>
      </div>
      <div className={clsx('btn-wrapper', className)}>
        <Btn className="btn-green-solid btn-rounded btn-with-fields">
          {btnText}
        </Btn>
      </div>
    </div>
  );
}

export default LobbyItem;
