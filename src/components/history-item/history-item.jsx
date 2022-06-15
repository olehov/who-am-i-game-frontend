import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';
import AnswerIcon from '../answer-icon/answer-icon';
import './history-item.scss';

function HistoryItem(props) {
  const { user, question, answers, guess } = props.question;

  return (
    <div className="history_item">
      <div className={clsx('history_item_question', guess)}>
        {guess && <span className="my_guess">My guess</span>}
        <img src={user.iconSrc} alt="icon" />
        <p>{question}</p>
      </div>
      <div className="history_item_icons_box">
        {answers &&
          answers.map((answer) => (
            <AnswerIcon answer={answer} key={uuidv4()} />
          ))}
      </div>
    </div>
  );
}

export default HistoryItem;
