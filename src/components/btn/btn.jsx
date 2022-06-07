import clsx from 'clsx';
import './btn.scss';

// <-- Use this names for Button Styles -->
// 'btn-green-solid'
// 'btn-pink-solid'
// 'btn-yellow-solid'
// 'btn-lightgray-outline'

// <-- Use this names for icon Styles -->
// 'check-icon'
// 'cross-icon'
// 'question-icon'

function Btn({
  children,
  iconClassName = 'd-none',
  type = 'button',
  onClick,
  btnStyleClassName = 'btn-green-solid',
  disabled,
}) {
  return (
    <>
      <button
        className={clsx('btn', btnStyleClassName)}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        <div className={iconClassName}></div>
        {children}
      </button>
    </>
  );
}

export default Btn;
