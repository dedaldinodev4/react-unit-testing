import React from 'react'
import { cleanup, fireEvent, render } from "@testing-library/react";
import { CheckBoxWithLabel } from ".";


afterEach(cleanup);

it('CheckboxWithLabel changes text after click', () => {
  const { queryByLabelText, getByLabelText } = render(
    <CheckBoxWithLabel labelOn="On" labelOff="Off" />
  )

 
  expect(queryByLabelText(/off/i)).toBeTruthy()
  
  fireEvent.click(getByLabelText(/off/i));
  
  expect(queryByLabelText(/on/i)).toBeTruthy()
})