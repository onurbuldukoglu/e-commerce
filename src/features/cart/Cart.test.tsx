import { render, screen } from '@testing-library/react';
import { Cart } from './Cart';

test('renders', () => {
  render(<Cart />);
  const cart = screen.getByRole('heading');
  expect(cart).toHaveTextContent('Sepet');
});
