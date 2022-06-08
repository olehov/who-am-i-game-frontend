import Btn from '../btn/btn';
import './question-form.scss';

function QuestionForm(props) {
  const handleChange = (event) => {
    props.setCurrentQuestion(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.code === 'Enter') {
      props.sendQuestion();
    }
  };

  return (
    <div className="form">
      <div className="row">
        <input
          className="input_field"
          type="text"
          placeholder="Type your question"
          maxLength="256"
          value={props.currentQuestion}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={props.disabled}
        />
        <Btn
          className="btn_ask"
          onClick={props.sendQuestion}
          disabled={props.disabled}
        >
          Ask
        </Btn>
      </div>
      <Btn
        className="btn_guess"
        onClick={() => props.setDisplayModal(true)}
        disabled={props.disabled}
      >
        I'm ready to guess
      </Btn>
    </div>
  );
}

export default QuestionForm;
