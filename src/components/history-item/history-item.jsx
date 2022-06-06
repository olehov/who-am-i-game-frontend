import AnswerIcon from '../answer-icon/answer-icon';
import './history-item.scss';

function HistoryItem(props) {
  const { user, question, answers, guess } = props.question;

  return (
    <div className="history_item">
      <div className="history_item_question">
        {guess && <span className="my_guess">My guess</span>}
        <img src={user.iconSrc} alt="icon" />
        <p>{question}</p>
      </div>
      <div className="history_item_icons_box">
        {answers.map((answer, index) => (
          <AnswerIcon answer={answer} key={index} />
        ))}
      </div>
    </div>
  );
}

export default HistoryItem;
