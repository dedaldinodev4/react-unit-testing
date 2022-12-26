import React from 'react'
import { render, 
  screen,
  waitFor, 
  fireEvent
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { List } from '.'


describe('List Component', () => {

  it('Should list items render', async () => {
    const { findByText } = render(<List initialStatus={['dedaldino', 'adelia', 'alana']} />)
    expect(await findByText('dedaldino')).toBeInTheDocument();
    expect(await findByText('alana')).toBeInTheDocument();
    expect(await findByText('adelia')).toBeInTheDocument();

    // await waitFor(() => {
    //   expect(queryByText('dedaldino')).toBeInTheDocument();
    //})
  })

  it('Should adding items from list', async () => {
    const { findByText, getByText, getByPlaceholderText, debug } = render(<List initialStatus={[]} />)

    const addButton = getByText('Add');
    const inputItem = getByPlaceholderText('New item');

    fireEvent.click(addButton)
    fireEvent.change(inputItem, {target: { value: 'Dedaldino'}})
    //userEvent.click(addButton);

   

    expect(await findByText('Novo')).toBeInTheDocument();

  })

  
})