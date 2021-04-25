import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('react-dom', () => ({
  render: jest.fn(),
}));

describe('index', () => {
  beforeEach(() => {
    global.document.getElementById = (x) => x;
    require('./index');
  });

  it('renders App component ', () => {
    expect(ReactDOM.render).toHaveBeenCalledWith(<App />, 'app');
  });
});
