import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Card } from './Card';

test('card is visible', () => {
  render(<Card />);
  expect(screen.getByText('Card Title')).toBeVisible();
});

test('card background color changes when disabled', () => {
  render(<Card disabled />);

  expect(screen.getByTestId('card')).toHaveStyleRule(
    'background-color',
    '#1f2933'
  );
});
