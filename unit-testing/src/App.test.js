import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const button = screen.getByTestId("button");
  const input = screen.getByTestId("input");
  const output = screen.getByTestId("output");

  fireEvent.click(button)

});
