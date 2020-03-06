import React from 'react';
import { render, cleanup, getByText } from '@testing-library/react';
import Page from './index';
import style from './page.css';
import Header from './Header';
import Content from './Content';

const createComp = children => {
  return {
    comp: render(<Page>{children}</Page>)
  };
};
describe('components/Page', () => {
  afterEach(cleanup);

  it('renders container with correct class', () => {
    const { comp } = createComp();
    expect(comp.container.firstChild.className).toEqual(style.page);
  });

  it('renders Header comp', () => {
    const { comp } = createComp();
    expect(comp.getByText('Header')).toBeTruthy();
  });

  it('renders Content comp with correct children', () => {
    const children = 'some text';
    const { comp } = createComp(children);
    const content = comp.getByRole('main');
    expect(getByText(content, 'some text')).toBeTruthy();
  });
});
