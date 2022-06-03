import './history-item.scss';

function HistoryItem() {
  return (
    <div className="history_item">
      <div className="history_item_question">
        <span className="icon"></span>
        <p>Am I from England?</p>
      </div>
      <div className="history_item_icons_box">
        <div className="icon_wrapper">
          <span className="icon"></span>
          <span className="icon_status icon_question"></span>
        </div>
        <div className="icon_wrapper">
          <span className="icon"></span>
          <span className="icon_status icon_check"></span>
        </div>
        <div className="icon_wrapper">
          <span className="icon"></span>
          <span className="icon_status icon_wrong"></span>
        </div>
      </div>
    </div>
  );
}

export default HistoryItem;
