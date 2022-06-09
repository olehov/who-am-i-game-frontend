import clsx from 'clsx';
import { ReactComponent as Check } from '../../assets/svg/check-icon-btn.svg';
import { ReactComponent as Question } from '../../assets/svg/question-icon-btn.svg';
import { ReactComponent as Cross } from '../../assets/svg/cross-icon-btn.svg';
import './message-block.scss';

function MessageBlock(props) {
  let message = props.message;
  let icon = null;

  if (message === 'yes') {
    icon = <Check className="message_check" />;
  }

  if (message === 'no') {
    icon = <Cross className="message_cross" />;
  }

  if (message === "don't know") {
    icon = <Question className="message_question" />;
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
