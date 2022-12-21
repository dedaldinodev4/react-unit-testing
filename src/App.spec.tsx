import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('App', () => {
  
 
    render(<App />)
    expect(screen.getByText('Hello World')).toBeTruthy(); // ToBeTruthy
  


    expect(1 + 1).toBe(2);

})