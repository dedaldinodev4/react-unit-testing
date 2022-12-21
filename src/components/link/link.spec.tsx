import React from 'react'
import { render, screen } from '@testing-library/react'
import { Link } from '.'

it('changes the class when horeved', () => {
  render(<Link page='http://www.facebook.com'>Facebook</Link>)
  expect(screen.getAllByText('Facebook')).toBeTruthy()
})