import Btn from '../btn/btn';
import './answer-form.scss';
import check from '../../assets/svg/check-icon-btn.svg';
import question from '../../assets/svg/question-icon-btn.svg';
import cross from '../../assets/svg/cross-icon-btn.svg';
import clsx from 'clsx';

function IconImage(props) {
  return (
    <img
      src={props.imgSrc}
      alt="icon"
      className={clsx('message_icon', props.message)}
    />
  );
}

function AnswerForm(props) {
  let btnRow = null;

  if (props.mode === 'answer') {
    btnRow = (
      <div className="row" onClick={props.onClick}>
        <Btn className="btn-green-solid btn-third">
          <IconImage imgSrc={check} />
          yes
        </Btn>
        <Btn className="btn-pink-solid btn-third">
          <IconImage imgSrc={cross} />
          no
        </Btn>
        <Btn className="btn-orange-solid btn-third">
          <IconImage imgSrc={question} />
          don't know
        </Btn>
      </div>
    );
  }

  if (props.mode === 'guess') {
    btnRow = (
      <div className="row" onClick={props.onClick}>
        <Btn className="btn-green-solid btn-half">
          <IconImage imgSrc={check} />
          yes
        </Btn>
        <Btn className="btn-pink-solid btn-half">
          <IconImage imgSrc={cross} />
          no
        </Btn>
      </div>
    );
  }

  return btnRow;
}

export default AnswerForm;
