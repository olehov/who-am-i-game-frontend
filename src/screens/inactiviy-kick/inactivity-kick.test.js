import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import InactivityKick from './inactivity-kick';

describe('Inactvity kick page', () => {
  const inactivityKick = (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<InactivityKick />} />
      </Routes>
    </MemoryRouter>
  );

  test('Must have a title', () => {
    render(inactivityKick);

    screen.getByText('WHO AM I');
  });

  test('Must have a message displayed', () => {
    render(inactivityKick);

    screen.getByText(
      'SORRY, YOU HAVE BEEN KICKED FROM THE GAME DUE TO INACTIVITY'
    );
  });

  test('Must have button to leave this page', () => {
    render(inactivityKick);

    screen.getByText('GO TO MAIN MENU');
  });
});
