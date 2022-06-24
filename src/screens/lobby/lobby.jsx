import Btn from '../../components/btn/btn';
import PlayerCard from '../../components/player-card/player-card';
import LeaveGameModal from '../../components/modals/leave-game/leave-game';
import SelectCharacterModal from '../../components/modals/select-character/select-character';
import Header from '../../components/header/header';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROCESSING_QUESTION, READY } from '../../constants/constants';
import './lobby.scss';
import GameDataContext from '../../contexts/game-data-context';
import { findGameById } from '../../services/games-service';

function Lobby() {
  const { gameData, setGameData, playerId } = useContext(GameDataContext);
  const [showLeaveModal, setLeaveModalActive] = useState(false);
  const [showSuggestModal, setSuggestModal] = useState(false);
  const [suggestBtn, setSuggestBtn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkStatus = setTimeout(async () => {
      setGameData(await findGameById(playerId, gameData.data.id));
    }, 1000);

    return () => clearTimeout(checkStatus);
  });

  useEffect(() => {
    if (!gameData.data.status) navigate('/');

    if (gameData.data.status === PROCESSING_QUESTION) {
      navigate('/play');
    }
  }, [gameData, navigate]);

  const players = gameData.data.players;
  const currentPlayer =
    players && players.find((player) => player.player.id === playerId);
  const playersWithoutYou =
    players && players.filter((player) => player.player.id !== playerId);

  return (
    <ScreenWrapper>
      <div className="input-screen">
        <Header inLobby />
        <div className="input-screen__player">
          <div className="input-screen__player-card-wrapper">
            {currentPlayer && (
              <PlayerCard
                avatarClassName={`avatar01`}
                name={`Player 1`}
                playerStatusClassName={
                  currentPlayer.state === READY ? 'yes' : 'no'
                }
                isYou
              />
            )}
            {playersWithoutYou ? (
              playersWithoutYou.map((player, index) => (
                <PlayerCard
                  key={player.player.id}
                  avatarClassName={`avatar0${index + 2}`}
                  name={`Player ${index + 2}`}
                  playerStatusClassName={
                    player.state === 'NOT_READY' ? 'no' : 'yes'
                  }
                />
              ))
            ) : (
              <h1>Something went wrong</h1>
            )}
          </div>
          <div className="input-screen__btn-wrapper">
            {suggestBtn && (
              <Btn
                className={['btn-green-solid', 'btn-large']}
                onClick={() => {
                  setSuggestModal(true);
                }}
              >
                Suggest a character
              </Btn>
            )}

            <div className="input-screen__demarcation"></div>

            <Btn
              className={['btn-pink-solid', 'btn-large']}
              onClick={() => setLeaveModalActive(true)}
            >
              LEAVE GAME
            </Btn>
          </div>
        </div>
        <LeaveGameModal
          showModal={showLeaveModal}
          setModalActive={setLeaveModalActive}
        />
        <SelectCharacterModal
          playerNum={1}
          displayModal={showSuggestModal}
          setDisplayModal={setSuggestModal}
          setSuggestBtn={setSuggestBtn}
        />
      </div>
    </ScreenWrapper>
  );
}

export default Lobby;
