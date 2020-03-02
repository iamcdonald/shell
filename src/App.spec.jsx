import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import Page from './components/Page';

describe('App', () => {
  afterEach(cleanup);

  it('renders page with correct contents', () => {
    const app = render(<App />);
    expect(app.getByText('A page with contents')).toBeTruthy();
  });
});
