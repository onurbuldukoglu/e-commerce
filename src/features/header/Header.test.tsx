import { screen, render } from '@testing-library/react';
import { Header } from './Header';

test('renders', () => {
  render(<Header />);

  const logInButton = screen.getByRole('button', { name: 'Giriş Yap' });
  expect(logInButton).toHaveTextContent('Giriş');
});
