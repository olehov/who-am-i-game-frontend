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
  icon = 'd-none',
  type = 'button',
  onClick,
  btnStyle = 'btn-green-solid',
  disabled,
}) {
  return (
    <>
      <button
        className={clsx('btn', btnStyle)}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        <div className={icon}></div>
        {children}
      </button>
    </>
  );
}

export default Btn;
