import Btn from '../../components/btn/btn';
import PlayerCard from '../../components/player-card/player-card';
import LeaveGameModal from '../../components/modals/leave-game';
import SelectCharacterModal from '../../components/modals/select-character';
import Header from '../../components/header/header';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import Spinner from '@atlaskit/spinner';
import { useContext, useState } from 'react';
import { READY } from '../../constants/constants';
import './lobby.scss';
import GameDataContext from '../../contexts/game-data-context';
import { suggestCharacter } from '../../services/games-service';
import useGameData from '../../services/useGameData';

function Lobby() {
  const { gameData, playerId } = useContext(GameDataContext);
  const [leaveModalActive, setLeaveModalActive] = useState(false);
  const [suggestModalActive, setSuggestModalActive] = useState(false);
  const [suggestBtn, setSuggestBtn] = useState(true);

  useGameData();

  const players =
    gameData.data &&
    gameData.data.players &&
    gameData.data.players.map((player, index) => ({
      nickname: player.player.name || `Player ${index + 1}`,
      avatar: `avatar0${index + 1}`,
      ...player,
    }));

  const currentPlayer =
    players && players.find((player) => player.player.id === playerId);
  const playersWithoutYou =
    players && players.filter((player) => player.player.id !== playerId);

  const submitCharacter = (event, playerName, characterName) => {
    event.preventDefault();
    suggestCharacter(playerId, gameData.data.id, playerName, characterName);
    setSuggestModalActive(false);
    setSuggestBtn(false);
  };

  return (
    <ScreenWrapper>
      <div className="input-screen">
        <Header type="game-lobby" />
        <div className="input-screen__player">
          <div className="input-screen__player-card-wrapper">
            {currentPlayer && (
              <PlayerCard
                avatarClassName={currentPlayer.avatar}
                name={currentPlayer.nickname}
                playerStatusClassName={
                  currentPlayer.state === READY ? 'yes' : 'unsure'
                }
                isYou
              />
            )}
            {playersWithoutYou ? (
              playersWithoutYou.map((player) => (
                <PlayerCard
                  key={player.player.id}
                  avatarClassName={player.avatar}
                  name={player.nickname}
                  playerStatusClassName={
                    player.state === READY ? 'yes' : 'unsure'
                  }
                />
              ))
            ) : (
              <div className="spinner-wrapper">
                <Spinner appearance="invert" />
              </div>
            )}
          </div>
          <div className="input-screen__btn-wrapper">
            {suggestBtn && (
              <Btn
                className={['btn-green-solid']}
                onClick={() => setSuggestModalActive(true)}
              >
                Suggest a character
              </Btn>
            )}
            <Btn
              className={['btn-pink-solid']}
              onClick={() => {
                setLeaveModalActive(true);
              }}
            >
              LEAVE GAME
            </Btn>
          </div>
        </div>
        <LeaveGameModal
          active={leaveModalActive}
          onCancel={() => setLeaveModalActive(false)}
        />
        <SelectCharacterModal
          player={currentPlayer && currentPlayer.nickname}
          active={suggestModalActive}
          onSubmit={submitCharacter}
          onCancel={() => setSuggestModalActive(false)}
        />
      </div>
    </ScreenWrapper>
  );
}

export default Lobby;
