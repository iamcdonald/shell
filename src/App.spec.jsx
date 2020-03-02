import React from 'react';
import { shallow } from 'enzyme';
import test from 'ava';
import App from './App';
import Page from './components/Page';

const createComp = () => shallow(<App />);

test('renders page with correct contents', t => {
  const app = createComp();
  const page = app.find(Page);
  t.is(page.props().children, 'A page with contents');
});
