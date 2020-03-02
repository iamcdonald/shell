import React from 'react';
import { shallow } from 'enzyme';
import test from 'ava';
import Page from '../../../../src/components/Page';
import style from '../../../../src/components/Page/page.scss';
import Header from '../../../../src/components/Page/Header';
import Content from '../../../../src/components/Page/Content';

const createComp = children => {
  return {
    comp: shallow(
      <Page>
        {children}
      </Page>
    )
  };
};

test('it renders container with correct class', t => {
  const { comp } = createComp();
  t.is(comp.props().className, style.page);
});

test('it renders Header comp', t => {
  const { comp } = createComp();
  t.is(comp.find(Header).length, 1);
});

test('it renders Content comp with correct children', t => {
  const children = 'some text';
  const { comp } = createComp(children);
  const content = comp.find(Content);
  t.is(content.length, 1);
  t.is(content.props().children, children);
});
