import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders link to this repo', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/github repo/i);
  expect(linkElement).toBeInTheDocument();
});
