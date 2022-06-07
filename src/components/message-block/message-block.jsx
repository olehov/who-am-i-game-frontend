import clsx from 'clsx';
import './message-block.scss';
import { ReactComponent as Check } from '../../assets/svg/check-icon-btn.svg';
import { ReactComponent as Question } from '../../assets/svg/question-icon-btn.svg';
import { ReactComponent as Cross } from '../../assets/svg/cross-icon-btn.svg';

function MessageBlock(props) {
  let message = props.message;
  let icon = null;

  if (message === 'yes') {
    icon = <Check fill="#00faac" />;
  }

  if (message === 'no') {
    icon = <Cross fill="#ff59b3" />;
  }

  if (message === "don't know") {
    icon = <Question fill="#ffd1af" />;
  }

  if (props.mode === 'response') {
    if (message === 'yes') {
      message = 'Right. Your turn';
    }

    if (message === 'no') {
      message = 'Wrong. Passing turn';
    }

    if (message === "don't know") {
      message = "Don't know. Try again";
    }
  }

  return (
    <div className={clsx('text', props.message, props.className)}>
      {icon}
      {message}
    </div>
  );
}

export default MessageBlock;
