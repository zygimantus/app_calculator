import React from 'react';
import { render, fireEvent, wait, waitForElement } from '@testing-library/react';
import App from './App';

describe("Number input", () => {

  const aButtons = [];

  // FIXME 0 ignored because of multiple elements have 0s
  for (let i = 1; i < 10; i++) {
    aButtons.push(i.toString());
  }

  aButtons.forEach(async (sText) => {
    it(`Clicked ${sText} appears in Display Toolbar`, () => {
      const { getByText, getByTestId } = render(<App />);
      const regex = new RegExp(sText);
      const oButton = getByText(regex);
      fireEvent.click(oButton);
      const display = getByTestId('display');
      expect(display).toHaveTextContent(sText);
    });
  });

});