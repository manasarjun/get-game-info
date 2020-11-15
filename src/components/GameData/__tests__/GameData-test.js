import React from 'react';
import renderer from 'react-test-renderer';
//import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GameData from '../GameData'
Enzyme.configure({ adapter: new Adapter() });

describe.only('<GameData />', () => {

  const baseProps = {
    races: [
      {
        name: "Breddlopp - Spårtrappa",
        number: 8,
        startTime: "2020-11-14T21:02:00",
        starts: [{}, {}],
      },
      {

      }

    ],
  }

  it('renders correctly', () => {
    const tree = renderer
      .create(<GameData {...baseProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });



});
