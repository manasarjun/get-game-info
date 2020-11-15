import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import GetGameInfo from '../GetGameInfo'

describe('<GetGameInfo />', () => {
  it('Render Initial Form', () => {
    const wrapper = shallow(<GetGameInfo />);

    expect(shallowToJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('input')).toHaveLength(1)
    expect(wrapper.find('h1')).toHaveLength(0)
  });
});
