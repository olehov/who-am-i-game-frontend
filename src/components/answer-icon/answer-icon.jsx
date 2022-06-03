import './answer-icon.scss';
import check from '../../assets/svg/check.svg';
import question_mark from '../../assets/svg/question-mark.svg';
import x from '../../assets/svg/x.svg';

function AnswerIcon(props) {
  const { userIcon, status } = props.answer;
  let icon = null;
  switch (status) {
    case 'yes':
      icon = check;
      break;
    case 'no':
      icon = x;
      break;
    default:
      icon = question_mark;
  }

  return (
    <div className="icon_wrapper">
      <img src={userIcon} alt="icon" />
      <img src={icon} alt={status} className="icon_status" />
    </div>
  );
}

export default AnswerIcon;
