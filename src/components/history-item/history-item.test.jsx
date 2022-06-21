import { render, screen } from '@testing-library/react';
import HistoryItem from './history-item';

describe('HistoryItem Component', () => {
  const question = { user: {}, question: 'Am I a Boris Johnson' };
  const users = [{ id: 0 }, { id: 1 }, { id: 2 }];

  it('displays a question', () => {
    render(<HistoryItem users={users} question={question} />);
    const questionText = screen.getByText(/am I a Boris Johnson/i);
    expect(questionText).toBeInTheDocument();
  });

  it('displays a guess-field if guessing', () => {
    render(
      <HistoryItem users={users} question={{ guess: true, ...question }} />
    );
    const guessText = screen.getByText(/my guess/i);
    expect(guessText).toBeInTheDocument();
    expect(guessText).toHaveAttribute('class', 'my_guess');
  });

  it('displays users icons without status', () => {
    render(<HistoryItem users={users} question={question} />);
    const icons = screen.getAllByRole('img');
    expect(icons.length).toEqual(4);
  });
});
