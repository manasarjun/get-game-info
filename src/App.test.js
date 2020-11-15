import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from './App';

test('Renders App', () => {
  const wrapper = shallow(<App />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
