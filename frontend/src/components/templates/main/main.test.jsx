import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders render main component', () => {
  render(<Main />);
  const headerElement = screen.getByTestId('main-1');
  expect(headerElement).toBeInTheDocument();
});