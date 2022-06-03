import HistoryItem from '../history-item/history-item';
import ContainerWrapper from '../container-wrapper/container-wrapper';
import QuestionForm from '../question-form/question-form';
import './history-container.scss';

function HistoryContainer() {
  return (
    <ContainerWrapper className="history">
      <div className="history_list">
        <HistoryItem />
        <HistoryItem />
      </div>
      <QuestionForm />
    </ContainerWrapper>
  );
}

export default HistoryContainer;
