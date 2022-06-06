import Btn from '../btn/btn';
import './answer-form.scss';

function AnswerForm(props) {
  let btnRow = null;

  if (props.mode === 'answer') {
    btnRow = (
      <div className="row" onClick={props.onClick}>
        <Btn btnStyle="btn-green-solid btn-third">yes</Btn>
        <Btn btnStyle="btn-pink-solid btn-third">no</Btn>
        <Btn btnStyle="btn-orange-solid btn-third">don't know</Btn>
      </div>
    );
  }

  if (props.mode === 'guess') {
    btnRow = (
      <div className="row" onClick={props.onClick}>
        <Btn btnStyle="btn-green-solid btn-half">yes</Btn>
        <Btn btnStyle="btn-pink-solid btn-half">no</Btn>
      </div>
    );
  }

  return btnRow;
}

export default AnswerForm;
