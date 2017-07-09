import React from 'react';
import { shallow } from 'enzyme';
import test from 'ava';
import Contents from '../../../../../src/components/Page/Content';
import style from '../../../../../src/components/Page/Content/content.scss';

const createComp = children => {
  return {
    comp: shallow(
      <Contents>
        {children}
      </Contents>
    )
  };
};

test('it renders container with correct class', t => {
  const { comp } = createComp();
  t.is(comp.props().className, style.content);
});

test('it renders children within container', t => {
  const children = <div>smash</div>;
  const { comp } = createComp(children);
  t.is(comp.find('div').length, 1);
  t.is(comp.find('div').text(), 'smash');
});
