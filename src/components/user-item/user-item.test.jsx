import { render, screen } from '@testing-library/react';
import UserItem from './user-item';

describe('UserItem Component', () => {
  const user = { name: 'GreenDean', character: 'Tom Ford' };

  it('displays a user name', () => {
    render(<UserItem user={user} />);
    const userName = screen.getByText(/GreenDean/);
    expect(userName).toBeInTheDocument();
    expect(userName).toHaveAttribute('class', 'user_item_name');
  });

  it('displays a user character', () => {
    render(<UserItem user={user} />);
    const userCharacter = screen.getByText(/Tom Ford/);
    expect(userCharacter).toBeInTheDocument();
    expect(userCharacter).toHaveAttribute('class', 'user_item_character');
  });
});
