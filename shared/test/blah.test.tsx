import React from 'react';
import { Thing } from '../src';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';

describe('Thing', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders without crashing', () => {
    render(<Thing />);
    expect(
      screen.getByText('the snozzberries taste like snozzberries')
    ).toBeInTheDocument();
  });
});
