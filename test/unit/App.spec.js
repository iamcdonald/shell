import React from 'react';
import { shallow } from 'enzyme';
import test from 'ava';
import App from '../../src/App';

const createComp = () => shallow(<App />);

test('has correct content', t => {
  const app = createComp();
  t.is(app.text(), 'APPPP');
});
