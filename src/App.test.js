import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio navbar', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: 'Jordan Lerat' })
  ).toBeInTheDocument();

  expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Work' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Skills' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Resources' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Setup' })).toBeInTheDocument();
});
