import GuessCharacterModal from '../modals/guess-a-character/guess-a-character';
import useModalActive from '../../hooks/modal-active';
import './question-form.scss';

function QuestionForm() {
  const [active, setActive] = useModalActive(false);

  return (
    <>
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
        <button className="btn btn_guess" onClick={() => setActive(true)}>
          I'm ready to guess
        </button>
      </div>
      <GuessCharacterModal displayModal={active} setDisplayModal={setActive} />
    </>
  );
}

export default QuestionForm;
