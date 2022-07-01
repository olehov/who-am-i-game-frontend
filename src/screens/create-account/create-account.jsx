import Btn from '../../components/btn/btn';
import GameTitle from '../../components/game-title/game-title';
import Input from '../../components/Input/Input';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function CreateAccount() {
  const navigate = useNavigate();

  return (
    <ScreenWrapper>
      <GameTitle />
      <form className="form-wrapper">
        <Input id={uuidv4()} placeholder="Username" type="text" />
        <Input id={uuidv4()} placeholder="Email" type="email" />
        <Input id={uuidv4()} placeholder="Password" type="password" />
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
            create account
          </Btn>
        </div>
      </form>
    </ScreenWrapper>
  );
}

export default CreateAccount;
