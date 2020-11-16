import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';

import GameData from '../GameData'

describe.only('<GameData />', () => {

  const data = {
    races: [
      {
        name: "Breddlopp - Spårtrappa",
        number: 8,
        startTime: "2020-11-14T21:02:00",
        starts: [{}, {}],
      }
    ],
  }

  it('renders correctly', () => {
    const wrapper = shallow(<GameData data={data} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
