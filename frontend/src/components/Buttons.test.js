import React from 'react';
import { render } from '@testing-library/react';
import Buttons from './Buttons';

describe("Calculator buttons", () => {

  const escapeStringRegexp = require('escape-string-regexp');
  const aButtons = ["(", ")", "%", "AC", "/", "*", "-", "+", "=", "."];

  for (let i = 0; i < 10; i++) {
    aButtons.push(i.toString());
  }

  aButtons.forEach(async (sButton) => {
    it(`renders ${sButton} button`, () => {
      const { getByText } = render(<Buttons />);
      const regex = new RegExp(escapeStringRegexp(sButton));
      const button = getByText(regex);
      expect(button).toBeInTheDocument();
    });
  });

});