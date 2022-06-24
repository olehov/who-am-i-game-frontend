import Btn from '../btn/btn';
import { ReactComponent as Check } from '../../assets/svg/check-icon-btn.svg';
import { ReactComponent as Question } from '../../assets/svg/question-icon-btn.svg';
import { ReactComponent as Cross } from '../../assets/svg/cross-icon-btn.svg';
import './answer-form.scss';
import { NO, NOT_SURE, YES } from '../../constants/constants';

function AnswerForm(props) {
  let btnRow = null;

  if (props.mode === 'answer') {
    btnRow = (
      <form className="row">
        <Btn
          className="btn-green-solid btn-third"
          value={YES}
          onClick={props.onClick}
        >
          <Check fill="#1e1b18" />
          {YES}
        </Btn>
        <Btn
          className="btn-pink-solid btn-third"
          value={NO}
          onClick={props.onClick}
        >
          <Cross fill="#1e1b18" />
          {NO}
        </Btn>
        <Btn
          className="btn-orange-solid btn-third"
          value={NOT_SURE}
          onClick={props.onClick}
        >
          <Question fill="#1e1b18" />
          DON'T KNOW
        </Btn>
      </form>
    );
  }

  if (props.mode === 'guess') {
    btnRow = (
      <form className="row" onSubmit={props.onClick}>
        <Btn
          className="btn-green-solid btn-half"
          value={YES}
          onClick={props.onClick}
        >
          <Check fill="#1e1b18" />
          YES
        </Btn>
        <Btn
          className="btn-pink-solid btn-half"
          value={NO}
          onClick={props.onClick}
        >
          <Cross fill="#1e1b18" />
          NO
        </Btn>
      </form>
    );
  }

  return btnRow;
}

export default AnswerForm;
