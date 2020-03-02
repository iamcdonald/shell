import React from 'react';
import App from './App';
import test from 'ava';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

const setup = () => {
  const stubs = {};
  stubs['react-dom'] = {
    render: sinon.stub()
  };
  global.document = {
    getElementById: x => x
  };
  proxyquire('./index', stubs);
  return { stubs };
};

test('test', t => {
  const { stubs } = setup();
  t.pass(stubs['react-dom'].render.calledWith(<App />, 'app'));
});
