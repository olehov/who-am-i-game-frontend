import HistoryItem from '../history-item/history-item';
import ContainerWrapper from '../container-wrapper/container-wrapper';
import QuestionForm from '../question-form/question-form';
import { useEffect, useRef, useState } from 'react';
import { currentUser, history } from '../../store/mock-data';
import AnswerForm from '../answer-form/answer-form';
import MessageBlock from '../message-block/message-block';
import './history-container.scss';

//---------types of mode-----------
//'ask' - asking a question
//'answer' - answer a question (3 buttons)
//'guess' - answer a quessing question (2 buttons)
//'wait' - waiting for response from other prayers after giving an answer
//'response' - giving a response for the question ('yes' or 'no')

function HistoryContainer(props) {
  const [mode, setMode] = useState('ask');
  const [message, setMessage] = useState("don't know");
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
    <ContainerWrapper className="history">
      <div className="history_list">
        {history.map((item, index) => (
          <HistoryItem question={item} key={index} />
        ))}
        <div className="list_scroll_bottom" ref={bottomElement}></div>
      </div>
      {mode === 'ask' && (
        <QuestionForm
          disabled={disabled}
          setCurrentQuestion={setCurrentQuestion}
          currentQuestion={currentQuestion}
          sendQuestion={sendQuestionHandler}
          setDisplayModal={props.setDisplayModal}
        />
      )}
      {(mode === 'answer' || mode === 'guess') && (
        <AnswerForm mode={mode} onClick={handleClick} />
      )}
      {(mode === 'wait' || mode === 'response') && (
        <MessageBlock mode={mode} message={message} className={mode} />
      )}
    </ContainerWrapper>
  );
}

export default HistoryContainer;
