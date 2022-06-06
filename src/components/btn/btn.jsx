import clsx from 'clsx';
import './btn.scss';

// <-- Use this names for Button Styles -->
// 'btn-green-solid'
// 'btn-pink-solid'
// 'btn-yellow-solid'
// 'btn-lightgray-outline'

function Btn({
  children,
  type = 'submit',
  onClick,
  btnStyle = 'btn-green-solid',
  disabled,
}) {
  return (
    <button
      className={clsx('btn', btnStyle)}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Btn;
