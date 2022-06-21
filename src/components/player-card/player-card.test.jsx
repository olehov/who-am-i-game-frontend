import { render, screen } from '@testing-library/react';
import PlayerCard from './player-card';

describe('PlayerCard Component', () => {
  const user = { name: 'GreenDean', character: 'Tom Ford' };

  it('displays a user name', () => {
    render(<PlayerCard name={user.name} assignedCharacter={user.character} />);
    const userName = screen.getByText(/GreenDean/);
    expect(userName).toBeInTheDocument();
  });

  it('displays a user character', () => {
    render(<PlayerCard name={user.name} assignedCharacter={user.character} />);
    const userCharacter = screen.getByText(/Tom Ford/);
    expect(userCharacter).toBeInTheDocument();
  });
});
