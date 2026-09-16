import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Table } from './Table';

test('table is visible', () => {
  render(<Table />);
  expect(screen.getByText('Skill')).toBeVisible();
});

test('table background color changes when disabled', () => {
  render(<Table disabled />);

  expect(screen.getByTestId('table')).toHaveStyleRule(
    'background-color',
    '#1f2933'
  );
});
