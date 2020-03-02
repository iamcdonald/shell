import React from 'react';
import { shallow } from 'enzyme';
import test from 'ava';
import Header from '../../../../../src/components/Page/Header';
import style from '../../../../../src/components/Page/Header/header.scss';

const createComp = () => shallow(<Header />);

test('it renders container with correct class', t => {
  const comp = createComp();
  t.is(comp.props().className, style.header);
});
