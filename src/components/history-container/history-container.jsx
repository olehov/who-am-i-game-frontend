import HistoryItem from '../history-item/history-item';
import ContainerWrapper from '../container-wrapper/container-wrapper';
import QuestionForm from '../question-form/question-form';
import './history-container.scss';
import { useEffect, useState } from 'react';
import { history } from '../../store/mock-data';
import AnswerForm from '../answer-form/answer-form';
import MessageBlock from '../message-block/message-block';

//---------types of mode-----------
//'ask' - asking a question
//'answer' - answer a question (3 buttons)
//'guess' - answer a quessing question (2 buttons)
//'wait' - waiting for response from other prayers after giving an answer
//'response' - giving a response for the question ('yes' or 'no')

function HistoryContainer() {
  const [mode, setMode] = useState('answer');
  const [message, setMessage] = useState('no');

  const handleClick = (event) => {
    setMode('wait');
    setMessage(event.target.textContent);
  };

  useEffect(() => {
    let listBottom = document.querySelector('.list_scroll_bottom');

    if (!listBottom) return;

    listBottom.scrollIntoView({
      behavior: 'auto' || 'smooth',
      block: 'end',
    });
  });

  return (
    <ContainerWrapper className="history">
      <div className="history_list">
        {history.map((item, index) => (
          <HistoryItem question={item} key={index} />
        ))}
        <div className="list_scroll_bottom"></div>
      </div>
      {mode === 'ask' && <QuestionForm />}
      {(mode === 'answer' || mode === 'guess') && (
        <AnswerForm mode={mode} onClick={handleClick} />
      )}
      {(mode === 'wait' || mode === 'response') && (
        <MessageBlock mode={mode} message={message} />
      )}
    </ContainerWrapper>
  );
}

export default HistoryContainer;
