import { render, screen } from '@testing-library/react';
import { Payment } from './Payment';

test('renders', () => {
  render(<Payment />);
  const test = screen.getByRole('heading');
  expect(test).toHaveTextContent('Ödeme');
});
