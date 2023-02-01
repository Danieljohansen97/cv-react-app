import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Education react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Education/i);
  expect(linkElement).toBeInTheDocument();
});
