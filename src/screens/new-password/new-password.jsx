import Btn from '../../components/btn/btn';
import GameTitle from '../../components/game-title/game-title';
import Input from '../../components/Input/Input';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function NewPassword() {
  const navigate = useNavigate();

  return (
    <ScreenWrapper>
      <GameTitle />
      <form className="form-wrapper">
        <Input
          id={uuidv4()}
          placeholder="New password"
          type="password"
          error="Error massage"
        />
        <Input
          id={uuidv4()}
          placeholder="Confirm new password"
          type="password"
          error="Error massage"
        />
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
            confirm
          </Btn>
        </div>
      </form>
    </ScreenWrapper>
  );
}

export default NewPassword;
