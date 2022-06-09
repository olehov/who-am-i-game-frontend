import GuessCharacterModal from '../modals/guess-a-character/guess-a-character';
import useModalActive from '../../hooks/modal-active';
import Btn from '../btn/btn';
import './question-form.scss';

function QuestionForm({
  disabled,
  setCurrentQuestion,
  currentQuestion,
  sendQuestion,
}) {
  const [active, setActive] = useModalActive(false);

  const handleChange = (event) => {
    setCurrentQuestion(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.code === 'Enter') {
      sendQuestion();
    }
  };

  return (
    <>
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
        <Btn className="btn-yellow-solid" onClick={() => setActive(true)}>
          I AM READY TO GUESS
        </Btn>
      </div>
      <GuessCharacterModal displayModal={active} setDisplayModal={setActive} />
    </>
  );
}

export default QuestionForm;
