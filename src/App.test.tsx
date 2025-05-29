import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Développeur Web & Designer/i);
  expect(headingElement).toBeInTheDocument();
});
