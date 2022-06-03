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
        <button className="btn btn_ask">Ask</button>
      </div>
      <button className="btn btn_guess">I'm ready to guess</button>
    </div>
  );
}

export default QuestionForm;
