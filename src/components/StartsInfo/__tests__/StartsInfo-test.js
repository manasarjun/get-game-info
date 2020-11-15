import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import StartsInfo from '../StartsInfo';

describe.only('<StartsInfo />', () => {
  const baseProps = {
    number: 1,
    horse: {
      "name": "Deweykidumnhowe",
      "trainer": {
        "firstName": "Carina",
        "lastName": "Hezekielsson",
      },
      "pedigree": {
        "father": {
          "name": "Deweycheatumnhowe",
        },
      }
    },
    "driver": {
      "firstName": "Jens",
      "lastName": "Nilsson",
    }
  }

  it('renders correctly', () => {
    const wrapper = shallow(<StartsInfo />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
