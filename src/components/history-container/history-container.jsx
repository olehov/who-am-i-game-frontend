import HistoryItem from '../history-item/history-item';
import ContainerWrapper from '../container-wrapper/container-wrapper';
import QuestionForm from '../question-form/question-form';
import './history-container.scss';
import { useEffect } from 'react';
import { history } from '../../store/mock-data';

function HistoryContainer() {
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
      <QuestionForm />
    </ContainerWrapper>
  );
}

export default HistoryContainer;
