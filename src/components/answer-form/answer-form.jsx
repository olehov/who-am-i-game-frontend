import Btn from '../btn/btn';
import { ReactComponent as Check } from '../../assets/svg/check-icon-btn.svg';
import { ReactComponent as Question } from '../../assets/svg/question-icon-btn.svg';
import { ReactComponent as Cross } from '../../assets/svg/cross-icon-btn.svg';
import './answer-form.scss';

function AnswerForm(props) {
  let btnRow = null;

  if (props.mode === 'answer') {
    btnRow = (
      <div className="row" onClick={props.onClick}>
        <Btn className="btn-green-solid btn-third">
          <Check fill="#1e1b18" />
          yes
        </Btn>
        <Btn className="btn-pink-solid btn-third">
          <Cross fill="#1e1b18" />
          no
        </Btn>
        <Btn className="btn-orange-solid btn-third">
          <Question fill="#1e1b18" />
          don't know
        </Btn>
      </div>
    );
  }

  if (props.mode === 'guess') {
    btnRow = (
      <div className="row" onClick={props.onClick}>
        <Btn className="btn-green-solid btn-half">
          <Check fill="#1e1b18" />
          yes
        </Btn>
        <Btn className="btn-pink-solid btn-half">
          <Cross fill="#1e1b18" />
          no
        </Btn>
      </div>
    );
  }

  return btnRow;
}

export default AnswerForm;
