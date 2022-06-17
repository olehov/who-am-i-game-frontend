import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Loading from './loading';

describe('Loading', () => {
  const loading = (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
      </Routes>
    </MemoryRouter>
  );

  test('Must display number players in queue', () => {
    render(loading);

    screen.getByText(/[0-9]+ PLAYERS ARE IN QUEUE/m);
  });

  test('Should display message', () => {
    render(loading);

    screen.getByText('PLEASE WAIT UNTIL WE FIND YOUR OPPONENTS');
  });

  test('Should have timer', () => {
    render(loading);

    screen.getByText('00:00');
  });

  test('Should have button to leave the page', () => {
    render(loading);

    screen.getByText('LEAVE GAME');
  });
});
