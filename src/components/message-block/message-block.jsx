import './message-block.scss';

function MessageBlock(props) {
  let messageBlock;

  if (props.mode === 'wait') {
    let message = '';
    let classes = 'text text_answer';

    if (props.message === 'yes') {
      message = 'Yes';
      classes = classes + ' text_yes';
    }

    if (props.message === 'no') {
      message = 'No';
      classes = classes + ' text_no';
    }

    if (props.message === "don't know") {
      message = "Don't know";
      classes = classes + ' text_know';
    }
    messageBlock = <div className={classes}>{message}</div>;
  }

  if (props.mode === 'response') {
    let message = '';
    let classes = 'text';

    if (props.message === 'yes') {
      message = 'Right. Your turn';
      classes = classes + ' text_answer_yes';
    }

    if (props.message === 'no') {
      message = 'Wrong. Passing turn';
      classes = classes + ' text_answer_no';
    }
    messageBlock = <div className={classes}>{message}</div>;
  }

  return messageBlock;
}

export default MessageBlock;
