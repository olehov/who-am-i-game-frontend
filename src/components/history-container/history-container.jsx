import HistoryItem from '../history-item/history-item';
import QuestionForm from '../question-form/question-form';
import { useEffect, useRef, useState } from 'react';
import { currentUser, history } from '../../store/mock-data';
import AnswerForm from '../answer-form/answer-form';
import MessageBlock from '../message-block/message-block';
import './history-container.scss';
import { users } from '../../store/mock-data';
import { answerQuestion, askQuestion } from '../../services/games-service';

function HistoryContainer({ mode, setMode }) {
  const [message, setMessage] = useState('unsure');
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [disabled, setDisabled] = useState(false);
  const bottomElement = useRef(null);

  useEffect(() => {
    const listBottom = bottomElement.current;

    if (!listBottom) return;

    listBottom.scrollIntoView({
      behavior: 'auto',
      block: 'end',
    });
  });

  const sendQuestionHandler = () => {
    if (currentQuestion !== '') {
      history.push({ user: currentUser, question: currentQuestion });
      askQuestion('Player-1', 1, currentQuestion);

      setCurrentQuestion('');
      setDisabled(true);
    }
  };

  const handleClick = (event) => {
    setMode('wait');
    setMessage(event.target.textContent);
    let answer = event.target.textContent.toUppercase();

    if (answer === "DON'T KNOW") {
      answer = 'NOT_SURE';
    }
    answerQuestion('Player 1', 1, answer);
  };

  return (
    <div className="history">
      <div className="history_list">
        {history.map((item, index) => (
          <HistoryItem users={users} question={item} key={index} />
        ))}
        <div className="list_scroll_bottom" ref={bottomElement}></div>
      </div>
      {mode === 'ask' && !disabled && (
        <QuestionForm
          setCurrentQuestion={setCurrentQuestion}
          currentQuestion={currentQuestion}
          sendQuestion={sendQuestionHandler}
        />
      )}
      {(mode === 'answer' || mode === 'guess') && (
        <AnswerForm mode={mode} onClick={handleClick} />
      )}
      {(mode === 'wait' || mode === 'response') && (
        <MessageBlock mode={mode} message={message} />
      )}
    </div>
  );
}

export default HistoryContainer;
