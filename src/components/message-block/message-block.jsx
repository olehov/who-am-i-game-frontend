import messageConverter from '../../helper-functions/message-converter';
import clsx from 'clsx';
import './message-block.scss';

function MessageBlock({ mode, message }) {
  const className = message === "don't know" ? 'unsure' : message;
  const modeClassName = `${mode}-${className}`;

  return (
    <div className={clsx('text', modeClassName)}>
      {mode !== 'response' && <div className={`icon-${className}`}></div>}
      <span className={modeClassName}>{messageConverter(mode, message)}</span>
    </div>
  );
}

export default MessageBlock;
