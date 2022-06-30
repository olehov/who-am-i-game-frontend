import './input.scss';

const Input = ({ id, ...attrs }) => {
  return (
    <div className="input-wrapper">
      <input name={id} id={id} {...attrs} />
      {attrs.type == 'password' && <div className="eye-icon"></div>}
    </div>
  );
};

export default Input;
