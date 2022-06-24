import clsx from 'clsx';
import './btn.scss';

// <-- Use this names for Button Styles -->
// 'btn-green-solid'
// 'btn-pink-solid'
// 'btn-yellow-solid'
// 'btn-lightgray-outline'
// 'btn-blue-outline'

// <-- Use this names for icon Styles -->
// 'check-icon'
// 'cross-icon'
// 'question-icon'

function Btn({
  children,
  iconClassName = 'd-none',
  type = 'button',
  onClick,
  className = 'btn-green-solid',
  disabled,
  value,
}) {
  return (
    <button
      className={clsx('btn', className)}
      onClick={onClick}
      type={type}
      disabled={disabled}
      value={value}
    >
      <div className={iconClassName}></div>
      {children}
    </button>
  );
}

export default Btn;
