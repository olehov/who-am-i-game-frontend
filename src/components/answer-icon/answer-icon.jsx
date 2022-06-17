import './answer-icon.scss';
import { ReactComponent as ReactCheck } from '../../assets/svg/check.svg';
import { ReactComponent as ReactQuestion } from '../../assets/svg/question-mark.svg';
import { ReactComponent as ReactCross } from '../../assets/svg/x.svg';

function AnswerIcon(props) {
  const userIconSrc = props.user.iconSrc;
  const status = props.status;
  let icon = null;
  const classes = 'icon_status';

  switch (status) {
    case 'yes':
      icon = <ReactCheck className={classes} />;
      break;
    case 'no':
      icon = <ReactCross className={classes} />;
      break;
    default:
      icon = <ReactQuestion className={classes} />;
  }

  return (
    <div className="icon_wrapper">
      <img src={userIconSrc} alt="icon" />
      {status && icon}
    </div>
  );
}

export default AnswerIcon;
