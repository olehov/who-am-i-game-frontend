import GameTitle from '../../components/game-title/game-title';
import Btn from '../../components/btn/btn';
import { useNavigate } from 'react-router-dom';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import GameDataContext from '../../contexts/game-data-context';
import { useContext, useEffect, useState } from 'react';
import { createGame } from '../../services/games-service';
import {
  WAITING_FOR_PLAYERS,
  SUGGESTING_CHARACTERS,
  NUMBER_OF_PLAYERS,
} from '../../constants/constants';
import './home.scss';
import PlayersOnlineTitle from '../../components/players-online-title/players-online-title';

function Homepage() {
  const { gameData, setGameData, playerId } = useContext(GameDataContext);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (gameData.data.status === WAITING_FOR_PLAYERS) {
      navigate('loading');
    } else if (gameData.data.status === SUGGESTING_CHARACTERS) {
      navigate('lobby');
    }
  }, [gameData, navigate]);

  return (
    <ScreenWrapper>
      <GameTitle />
      <PlayersOnlineTitle />
      {isLogin ? (
        <AfterLogin
          setIsLogin={setIsLogin}
          playerId={playerId}
          setGameData={setGameData}
        />
      ) : (
        <BeforeLogin
          setIsLogin={setIsLogin}
          playerId={playerId}
          setGameData={setGameData}
        />
      )}
    </ScreenWrapper>
  );
}

export default Homepage;

function BeforeLogin({ setGameData, playerId, setIsLogin }) {
  return (
    <>
      <Btn
        className={'btn-blue-outline'}
        onClick={async () => {
          setGameData(await createGame(playerId, NUMBER_OF_PLAYERS));
        }}
      >
        PLAY QUICK GAME
      </Btn>
      <div className="dividing-line"></div>
      <Btn className={'btn-blue-outline'}>CREATE ACCOUNT</Btn>
      <div className={'text-login or'}>or</div>
      <Btn className={'btn-fb-blue'} iconClassName={'fb'}>
        Continue with Facebook
      </Btn>
      <div className={'dividing-line'}></div>
      <div className={'text-login already'}>Already have a account?</div>
      <Btn
        className={'btn-blue-outline'}
        onClick={() => {
          setIsLogin(true);
        }}
      >
        SIGN IN
      </Btn>
    </>
  );
}

function AfterLogin({ setGameData, playerId, setIsLogin }) {
  return (
    <div className="after-login-wrapper">
      <div className="profile">
        <div className="profile__title">welcome</div>
        <div className="profile__body">
          <div className="profile__avatar"></div>
          <div className="profile__name">GreenDean</div>
          <div className="profile__edit-icon"></div>
        </div>
      </div>
      <Btn
        className={'btn-blue-outline'}
        onClick={async () => {
          setGameData(await createGame(playerId, NUMBER_OF_PLAYERS));
        }}
      >
        PLAY QUICK GAME
      </Btn>
      <Btn className={'btn-blue-outline'}>Lobbies</Btn>
      <Btn className={'btn-blue-outline'}>profile</Btn>
      <Btn
        className={'btn-pink-outline'}
        onClick={() => {
          setIsLogin(false);
        }}
      >
        log out
      </Btn>
    </div>
  );
}
