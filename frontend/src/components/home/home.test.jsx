import { render, screen } from '@testing-library/react';
import Home from './Home';

it('Should render the Home component', () => {
  render(<Home/>);
  const linkElement = screen.getByText(/Bem vindo/i);
  expect(linkElement).toBeInTheDocument();
});