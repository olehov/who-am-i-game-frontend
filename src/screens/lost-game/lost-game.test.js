import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import LostGame from './lost-game';

describe('Lost game', () => {
  const lostgame = (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<LostGame />} />
      </Routes>
    </MemoryRouter>
  );

  test('Must display a message', () => {
    render(lostgame);

    screen.getByText(
      'OOPS, YOU HAVE LOST THE GAME.TRY BETTER NEXT TIME. YOUR CHARACTER WAS'
    );
  });

  test('Must have an option to leave the page', () => {
    render(lostgame);

    screen.getByText('GO TO MAIN MENU');
  });
});
