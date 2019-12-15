import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders AC button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/AC/i);
  expect(linkElement).toBeInTheDocument();
});
