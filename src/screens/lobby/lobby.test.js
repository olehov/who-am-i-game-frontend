import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Lobby from './lobby';

describe('Lobby', () => {
  const lobby = (
    <MemoryRouter>
      <Routes>
        <Route path={'/'} element={<Lobby />} />
      </Routes>
    </MemoryRouter>
  );

  test('Must have header', () => {
    render(lobby);

    screen.getByText('WHO AM I');
    screen.getByText(/\d\d:\d\d/m);
  });

  test('Must have player cards', () => {
    render(lobby);

    screen.getByText('Player 1');
    screen.getByText('Player 2');
    screen.getByText('Player 3');
  });

  test('Must have an option to suggest a character', () => {
    render(lobby);

    screen.getByText('Suggest a character');
  });

  test('Must have an option to leave game', () => {
    render(lobby);

    screen.getByText('LEAVE GAME');
  });
});
