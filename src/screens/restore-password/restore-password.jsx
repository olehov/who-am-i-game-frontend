import Btn from '../../components/btn/btn';
import GameTitle from '../../components/game-title/game-title';
import Input from '../../components/Input/Input';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import { useNavigate } from 'react-router-dom';
import './restore-password.scss';

function RestorePassword() {
  const navigate = useNavigate();

  return (
    <ScreenWrapper>
      <GameTitle />
      <form className="form-wrapper">
        <div className="subtitle title-wight">restore password</div>
        <Input id="id02" placeholder="Email" type="email" />
        <div className="btn-form-wrapper">
          <Btn
            className={'btn-pink-solid'}
            onClick={() => {
              navigate('/');
            }}
          >
            Cancel
          </Btn>
          <Btn
            onClick={() => {
              navigate('/');
            }}
          >
            sign in
          </Btn>
        </div>
      </form>
    </ScreenWrapper>
  );
}

export default RestorePassword;
