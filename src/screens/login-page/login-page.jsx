import GameTitle from '../../components/game-title/game-title';
import Btn from '../../components/btn/btn';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import PlayersOnlineTitle from '../../components/players-online-title/players-online-title';
import { useNavigate } from 'react-router-dom';
import './login-page.scss';
// import { useContext } from 'react';
// import GameDataContext from '../../contexts/game-data-context';

function LoginPage() {
  // const { resetData } = useContext(GameDataContext);
  const navigate = useNavigate();

  return (
    <ScreenWrapper>
      <GameTitle />
      <PlayersOnlineTitle />
      <Btn
        className={'btn-blue-outline'}
        onClick={async () => {
          // setGameData(await createGame(playerId, NUMBER_OF_PLAYERS));
        }}
      >
        PLAY QUICK GAME
      </Btn>
      <div className="dividing-line"></div>
      <Btn className={'btn-blue-outline'}>CREATE ACCOUNT</Btn>
      <div className={"text-login or"}>or</div>
      <Btn className={'btn-fb-blue'} iconClassName={'fb'}>Continue with Facebook</Btn>
      <div className={"dividing-line"}></div>
      <div className={"text-login already"}>Already have a account?</div>
      <Btn className={'btn-blue-outline'}>SIGN IN</Btn>
    </ScreenWrapper>
  );
}

export default LoginPage;