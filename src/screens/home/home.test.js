import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Homepage from './home';

describe('Homepage', () => {
  const homepage = (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </MemoryRouter>
  );

  test('Must have title', () => {
    render(homepage);

    screen.getByText('WHO AM I');
  });

  test('Must have a game starting button', () => {
    render(homepage);

    screen.getByText('PLAY QUICK GAME');
  });
});
