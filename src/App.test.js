import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders the name of the game', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const textElement = screen.getByText(/who am i/i);
  expect(textElement).toBeInTheDocument();
});
