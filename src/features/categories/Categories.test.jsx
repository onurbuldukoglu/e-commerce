import { render, screen } from '@testing-library/react';
import { Categories } from './Categories';

test('render', () => {
  render(<Categories />);
  const categoryButton = screen.getByRole('button', { name: 'Category 1' });

  expect(categoryButton).toHaveTextContent('Category');
});
