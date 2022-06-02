import './user-item.scss';

function UserItem(props) {
  return (
    <div className={'user_item ' + props.className}>
      <span className="user_item_icon"></span>
      <span className="user_item_name">{props.user.name}</span>
      <span className="user_item_character">{props.user.character}</span>
    </div>
  );
}

export default UserItem;
