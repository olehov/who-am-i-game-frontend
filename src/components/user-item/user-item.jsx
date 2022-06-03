import clsx from 'clsx';
import './user-item.scss';

function UserItem(props) {
  return (
    <div className={clsx('user_item', props.className)}>
      <img src={props.user.icon} alt="icon" />
      <span className="user_item_name">{props.user.name}</span>
      <span className="user_item_character">{props.user.character}</span>
    </div>
  );
}

export default UserItem;
