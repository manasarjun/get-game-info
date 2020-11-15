import React from 'react';
import renderer from 'react-test-renderer';

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
    const tree = renderer
      .create(<StartsInfo {...baseProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
