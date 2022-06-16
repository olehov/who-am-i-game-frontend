import './answer-icon.scss';
import check from '../../assets/svg/check.svg';
import question_mark from '../../assets/svg/question-mark.svg';
import x from '../../assets/svg/x.svg';

function AnswerIcon(props) {
  const userIconSrc = props.user.iconSrc;
  const status = props.status;
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
      {status && <img src={iconSrc} alt={status} className="icon_status" />}
    </div>
  );
}

export default AnswerIcon;
