import { render, screen } from '@testing-library/react';
import MessageBlock from './message-block';

describe('MessageBlock Component in "wait" mode', () => {
  const mode = 'wait';

  it('displays "yes" message', () => {
    render(<MessageBlock mode={mode} message="yes" />);
    const messageText = screen.getByText(/yes/i);
    expect(messageText).toBeInTheDocument();
    expect(messageText).toHaveAttribute('class', 'wait-yes');
  });

  it('displays "no" message', () => {
    render(<MessageBlock mode={mode} message="no" />);
    const messageText = screen.getByText(/no/i);
    expect(messageText).toBeInTheDocument();
    expect(messageText).toHaveAttribute('class', 'wait-no');
  });

  it('displays "don\'t know" message', () => {
    render(<MessageBlock mode={mode} message="don't know" />);
    const messageText = screen.getByText(/don't know/i);
    expect(messageText).toBeInTheDocument();
    expect(messageText).toHaveAttribute('class', 'wait-unsure');
  });
});

describe('MessageBlock Component in "response" mode', () => {
  const mode = 'response';

  it('displays message when answer is right', () => {
    render(<MessageBlock mode={mode} message="yes" />);
    const messageText = screen.getByText(/right. Your turn/i);
    expect(messageText).toBeInTheDocument();
    expect(messageText).toHaveAttribute('class', 'response-yes');
  });

  it('displays message when answer is wrong', () => {
    render(<MessageBlock mode={mode} message="no" />);
    const messageText = screen.getByText(/wrong. Passing turn/i);
    expect(messageText).toBeInTheDocument();
    expect(messageText).toHaveAttribute('class', 'response-no');
  });

  it('displays message when answer is uncertain', () => {
    render(<MessageBlock mode={mode} message="don't know" />);
    const messageText = screen.getByText(/don't know. Try again/i);
    expect(messageText).toBeInTheDocument();
    expect(messageText).toHaveAttribute('class', 'response-unsure');
  });
});
