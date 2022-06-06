import './answer-icon.scss';
import check from '../../assets/svg/check.svg';
import question_mark from '../../assets/svg/question-mark.svg';
import x from '../../assets/svg/x.svg';

function AnswerIcon(props) {
  const { userIconSrc, status } = props.answer;
  let iconSrc = null;
  switch (status) {
    case 'yes':
      iconSrc = check;
      break;
    case 'no':
      iconSrc = x;
      break;
    default:
      iconSrc = question_mark;
  }

  return (
    <div className="icon_wrapper">
      <img src={userIconSrc} alt="icon" />
      <img src={iconSrc} alt={status} className="icon_status" />
    </div>
  );
}

export default AnswerIcon;
