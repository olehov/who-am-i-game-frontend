import Btn from '../btn/btn';
import './question-form.scss';

function QuestionForm() {
  return (
    <div className="form">
      <div className="row">
        <input
          className="input_field"
          type="text"
          placeholder="Type your question"
          maxLength="256"
        />
        <Btn btnStyle="btn_ask">Ask</Btn>
      </div>
      <Btn btnStyle="btn_guess">I'm ready to guess</Btn>
    </div>
  );
}

export default QuestionForm;
