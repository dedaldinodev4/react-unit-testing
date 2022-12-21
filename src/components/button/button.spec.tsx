import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Button } from '.'

afterEach(cleanup)

it('Button houved', () => {
  const { queryByTitle, getByTitle } = render(
    <Button variant='primary'>Click Me</Button>
  )

  expect(queryByTitle(/light/i)).toBeTruthy();

  fireEvent.mouseEnter(getByTitle(/light/i))

  expect(queryByTitle(/dark/i)).toBeTruthy();
})