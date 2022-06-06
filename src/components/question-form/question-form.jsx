import GuessCharacterModal from '../modals/guess-a-character/guess-a-character';
import { useState } from 'react';
import './question-form.scss';

function QuestionForm() {
  const [displayModal, setDisplayModal] = useState(false);

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
        <button className="btn btn_guess" onClick={() => setDisplayModal(true)}>
          I'm ready to guess
        </button>
      </div>
      <GuessCharacterModal
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
      />
    </>
  );
}

export default QuestionForm;
