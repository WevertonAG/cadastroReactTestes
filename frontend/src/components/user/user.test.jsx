import { render, screen, findByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import UserCrud from './UserCrud';

describe('tests from component userCrud', () => {
  it('Should to render userCrud component', () => {
    render(<UserCrud />)
    const userRender = screen.getByText(/Cadastro/i)
    expect(userRender).toBeInTheDocument()
  })

  it('Should to render table', () => {
    render(<UserCrud />)
    const tableRender = screen.getByText(/Ações/i)
    expect(tableRender).toBeInTheDocument()
  })

  /*it('Should to render tableRows', async() => {
    render(<UserCrud />)
    const tableRowsRender = screen.getByTestId('table-1');
    expect(tableRowsRender).toBeInTheDocument();
  })
*/
  it('Should be able to add new User', async () => {
    const { findByText, debug } = render(<UserCrud />)

    const inputElement = screen.getByPlaceholderText(/Digite o nome/i)
    const input2Element = screen.getByPlaceholderText(/Digite o e-email/i)

    const addButton = screen.getByText(/Salvar/i)

    userEvent.type(inputElement, 'teste')
    userEvent.type(input2Element, 'teste@gmail.com')

    userEvent.click(addButton)
    debug()
    expect(await findByText('teste')).toBeInTheDocument();
  })

  /*it('Should be able to delete user', async () => {
    const { findByText } = render(<UserCrud />)

    const deleteButton = screen.getByTestId('delete-1')

    userEvent.click(deleteButton)
    expect(await findByText('Novo Cadastro')).toBeInTheDocument();
  })*/

})