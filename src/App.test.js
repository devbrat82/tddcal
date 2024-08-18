import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('String Calculator', () => {
test('renders String Calculator link', () => {
  render(<App />);
  const linkElement = screen.getByText(/String Calculator/i);
  expect(linkElement).toBeInTheDocument();
});

test('matches the snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test('renders the input and button correctly', () => {
  render(<App />);
  expect(screen.getByPlaceholderText('Enter numbers')).toBeInTheDocument();
  expect(screen.getByText('Calculate')).toBeInTheDocument();
});

test('calculates the sum correctly for valid input', () => {
  render(<App />);
  
  fireEvent.change(screen.getByPlaceholderText('Enter numbers'), { target: { value: '1,2,3' } });
  fireEvent.click(screen.getByText('Calculate'));
  
  expect(screen.getByText('Result: 6')).toBeInTheDocument();
});

test('displays an error message for invalid input', () => {
  render(<App />);
  
  fireEvent.change(screen.getByPlaceholderText('Enter numbers'), { target: { value: '1,-2,3' } });
  fireEvent.click(screen.getByText('Calculate'));
  
  expect(screen.getByText('negative numbers not allowed: -2')).toBeInTheDocument();
  expect(screen.queryByText('Result:')).toBeNull();
});
});
