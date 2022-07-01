import clsx from 'clsx';
import './input.scss';

const Input = ({ id, type, error, ...attrs }) => {
  const classes = clsx('input', { error });

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <input className={classes} name={id} id={id} {...attrs} />
        {type === 'password' && <div className="eye-icon"></div>}
      </div>
      {error && <div className="inputError">{error}</div>}
    </div>
  );
};

export default Input;
