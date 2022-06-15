import HistoryItem from '../history-item/history-item';
import QuestionForm from '../question-form/question-form';
import { useEffect, useRef, useState } from 'react';
import { currentUser, history } from '../../store/mock-data';
import AnswerForm from '../answer-form/answer-form';
import MessageBlock from '../message-block/message-block';
import { v4 as uuidv4 } from 'uuid';
import './history-container.scss';

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

      setCurrentQuestion('');
      setDisabled(true);
      setTimeout(() => setDisabled(false), 10000);
    }
  };

  const handleClick = (event) => {
    setMode('wait');
    setMessage(event.target.textContent);
  };

  return (
    <div className="history">
      <div className="history_list">
        {history.map((item) => (
          <HistoryItem question={item} key={uuidv4()} />
        ))}
        <div className="list_scroll_bottom" ref={bottomElement}></div>
      </div>
      {mode === 'ask' && (
        <QuestionForm
          disabled={disabled}
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
