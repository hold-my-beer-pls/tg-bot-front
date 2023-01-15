import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('loh', () => {
  render(<App />);
  const linkElement = screen.getByText('hello loh');
  expect(linkElement).toBeInTheDocument();
});
