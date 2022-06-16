import { fireEvent, render, screen } from '@testing-library/react';
import AnswerForm from './answer-form';

const onClick = jest.fn();

describe('AnswerForm Component', () => {
  it('displays 3 buttons when mode="answer"', () => {
    render(<AnswerForm mode="answer" />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(3);
  });

  it('displays 2 buttons when mode="guess"', () => {
    render(<AnswerForm mode="guess" />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(2);
  });

  it('clicking buttons check when mode="answer"', () => {
    render(<AnswerForm mode="answer" onClick={onClick} />);
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    expect(onClick).toHaveBeenCalledTimes(1);
    fireEvent.click(buttons[1]);
    expect(onClick).toHaveBeenCalledTimes(2);
    fireEvent.click(buttons[2]);
    expect(onClick).toHaveBeenCalledTimes(3);
  });

  it('clicking buttons check when mode="guess"', () => {
    render(<AnswerForm mode="guess" onClick={onClick} />);
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    expect(onClick).toHaveBeenCalledTimes(1);
    fireEvent.click(buttons[1]);
    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
