import clsx from 'clsx';
import './message-block.scss';
import check from '../../assets/svg/check-icon-btn.svg';
import question from '../../assets/svg/question-icon-btn.svg';
import cross from '../../assets/svg/cross-icon-btn.svg';

function MessageBlock(props) {
  let message = props.message;
  let iconSrc = '#';

  if (message === 'yes') {
    iconSrc = check;
  }

  if (message === 'no') {
    iconSrc = cross;
  }

  if (message === "don't know") {
    iconSrc = question;
  }

  if (props.mode === 'response') {
    if (message === 'yes') {
      message = 'Right. Your turn';
    }

    if (message === 'no') {
      iconSrc = cross;
      message = 'Wrong. Passing turn';
    }

    if (message === "don't know") {
      iconSrc = question;
      message = "Don't know. Try again";
    }
  }

  return (
    <div className={clsx('text', props.message, props.className)}>
      <img
        src={iconSrc}
        alt="icon"
        className={clsx('message_icon', props.message)}
      />
      {message}
    </div>
  );
}

export default MessageBlock;
