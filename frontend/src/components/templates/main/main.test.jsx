import {render} from '@testing-library/jest-dom'
import Main from './Main';



 test('should render the main', () => {
    const {getByText} = render(<Main/>) 

    expect(getByText('vindo').toBeTruthy())
  })



