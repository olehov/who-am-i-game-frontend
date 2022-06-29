import LobbyItem from '../../components/lobby-item/lobby-item';
import Header from '../../components/header/header';
import './main-lobby.scss';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import JoinLobbyModal from '../../components/modals/join-lobby-modal/join-lobby-modal';
import { useState } from 'react';
import Btn from '../../components/btn/btn';
import {
  NUMBER_OF_PLAYERS_FILTER,
  THEME_FILTER,
  TYPE_FILTER,
} from '../../constants/constants';
import TableColumnTitle from '../../components/table-column-title/table-column-title';

function MainLobby() {
  const [themeFilter, setThemeFilter] = useState(THEME_FILTER);
  const [numberFilter, setNumberFilter] = useState(NUMBER_OF_PLAYERS_FILTER);
  const [typeFilter, setTypeFilter] = useState(TYPE_FILTER);

  const [themeDropdown, setThemeDropdown] = useState(false);
  const [numberDropdown, setNumberDropdown] = useState(false);
  const [typeDropdown, setTypeDropdown] = useState(false);

  const [joinLobbyModal, setJoinLobbyModal] = useState(false);

  const resetFiltersHandler = () => {
    setThemeFilter((state) =>
      state.map((filter) => ({ ...filter, checked: false }))
    );
    setNumberFilter((state) =>
      state.map((filter) => ({ ...filter, checked: false }))
    );
    setTypeFilter((state) =>
      state.map((filter) => ({ ...filter, checked: false }))
    );
  };

  const closeDropdown = (event) => {
    if (
      !event.target.className.includes('table-header__column') &&
      event.target.tagName !== 'INPUT' &&
      event.target.tagName !== 'LABEL'
    ) {
      setThemeDropdown(false);
      setNumberDropdown(false);
      setTypeDropdown(false);
    }
  };

  return (
    <ScreenWrapper className="lobby-screen">
      <Header type="lobbies" />
      <div className="main-lobby" onClick={closeDropdown}>
        <div className="table-header">
          <div className="table-header__info">
            <TableColumnTitle
              name="Theme"
              filtersGroup={themeFilter}
              setFilter={setThemeFilter}
              displayDropdown={themeDropdown}
              setDisplayDropdown={setThemeDropdown}
            >
              Theme
            </TableColumnTitle>
            <TableColumnTitle
              name="NumbersOfPlayers"
              filtersGroup={numberFilter}
              setFilter={setNumberFilter}
              displayDropdown={numberDropdown}
              setDisplayDropdown={setNumberDropdown}
            >
              Number of Players
            </TableColumnTitle>
            <TableColumnTitle
              className="type"
              name="Type"
              filtersGroup={typeFilter}
              setFilter={setTypeFilter}
              displayDropdown={typeDropdown}
              setDisplayDropdown={setTypeDropdown}
            >
              Type
            </TableColumnTitle>
          </div>
          <div>
            <Btn
              className="btn-green-solid btn-rounded btn-with-fields"
              onClick={resetFiltersHandler}
            >
              RESET FILTERS
            </Btn>
          </div>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
          <LobbyItem
            key={num}
            theme="Actors"
            numberOfPlayers={`${num}/12 players`}
            type={num % 3 === 0 ? 'Public' : 'Private'}
            setJoinLobbyModal={setJoinLobbyModal}
          />
        ))}
      </div>
      <JoinLobbyModal
        displayModal={joinLobbyModal}
        setDisplayModal={setJoinLobbyModal}
      />
    </ScreenWrapper>
  );
}

export default MainLobby;
