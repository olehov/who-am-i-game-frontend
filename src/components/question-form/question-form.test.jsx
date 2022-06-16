import { fireEvent, render, screen } from '@testing-library/react';
import QuestionForm from './question-form';
import ModalContext from '../../contexts/modal-context';

const sendQuestion = jest.fn();

describe('QuestionForm Component', () => {
  it('displays input field', () => {
    render(
      <ModalContext.Provider value={false}>
        <QuestionForm />
      </ModalContext.Provider>
    );
    const inputField = screen.getByPlaceholderText(/type your question/i);
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute('class', 'input_field');
  });

  it('displays buttons', () => {
    render(
      <ModalContext.Provider value={false}>
        <QuestionForm />
      </ModalContext.Provider>
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(2);
    expect(buttons[0]).toHaveTextContent(/ask/i);
    expect(buttons[0]).toHaveAttribute('class', 'btn btn_ask');
    expect(buttons[1]).toHaveTextContent(/i am ready to guess/i);
    expect(buttons[1]).toHaveAttribute('class', 'btn btn-yellow-solid');
  });

  it('clicking ask-button check', () => {
    render(
      <ModalContext.Provider value={false}>
        <QuestionForm sendQuestion={sendQuestion} />
      </ModalContext.Provider>
    );
    const buttonAsk = screen.getByText(/ask/i);
    fireEvent.click(buttonAsk);
    expect(sendQuestion).toHaveBeenCalledTimes(1);
  });
});
