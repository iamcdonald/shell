import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Contents from './index';
import style from './content.css';

const createComp = (children) => {
  return {
    comp: render(<Contents>{children}</Contents>),
  };
};

describe('components/Page/Content', () => {
  afterEach(cleanup);

  it('renders container with correct class', () => {
    const { comp } = createComp();
    expect(comp.container.firstChild.className).toEqual(style.content);
  });

  it('renders children within container', () => {
    const children = <div>smash</div>;
    const { comp } = createComp(children);
    expect(comp.getByText('smash')).toBeTruthy();
  });
});
