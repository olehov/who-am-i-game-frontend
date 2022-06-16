import clsx from 'clsx';
import AnswerIcon from '../answer-icon/answer-icon';
import './history-item.scss';

function HistoryItem(props) {
  const { user, question, answers, guess } = props.question;
  const users = props.users;

  return (
    <div className="history_item">
      <div className={clsx('history_item_question', guess)}>
        {guess && <span className="my_guess">My guess</span>}
        <img src={user.iconSrc} alt="icon" />
        <p>{question}</p>
      </div>
      <div className="history_item_icons_box">
        {users.map((user) => (
          <AnswerIcon
            key={user.id}
            user={user}
            status={
              answers
                ? answers.find((answer) => answer.userId === user.id).status
                : null
            }
          />
        ))}
      </div>
    </div>
  );
}

export default HistoryItem;
