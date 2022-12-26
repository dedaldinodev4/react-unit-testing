import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('App', () => {
  
 
    render(<App />)
    expect(screen.getByRole('heading')).toHaveTextContent(/Hello World/i)
    expect(screen.getByText('Hello World')).toBeTruthy(); // ToBeTruthy
})