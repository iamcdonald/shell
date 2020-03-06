import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './index';
import style from './header.css';

describe('components/Page/Header', () => {
  afterEach(cleanup);

  it('renders container with correct class', () => {
    const comp = render(<Header />);
    expect(comp.container.firstChild.className).toEqual(style.header);
  });
});
