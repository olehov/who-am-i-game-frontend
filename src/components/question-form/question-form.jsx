import ModalContext from '../../contexts/modal-context';
import Btn from '../btn/btn';
import { useContext } from 'react';
import './question-form.scss';

function QuestionForm({
  disabled,
  setCurrentQuestion,
  currentQuestion,
  sendQuestion,
}) {
  const setModalActive = useContext(ModalContext)[1];

  const handleChange = (event) => {
    setCurrentQuestion(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.code === 'Enter') {
      sendQuestion();
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
          value={currentQuestion}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
        />
        <button
          className="btn btn_ask"
          onClick={sendQuestion}
          disabled={disabled}
        >
          Ask
        </button>
      </div>
      <Btn className="btn-yellow-solid" onClick={() => setModalActive(true)}>
        I AM READY TO GUESS
      </Btn>
    </div>
  );
}

export default QuestionForm;
