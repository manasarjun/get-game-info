import React from 'react';
import PropTypes from 'prop-types';

function TestInstance(props) {
  const { firstName, toggle, id, track } = props;
  return track.map(element => {
    return ((element.id === id && element.isOpen) ? <p>{firstName}</p> : null)
  });
  /*   return (
      <>
        {(toggle.id === id && toggle.isOpen) ? firstName : null}
      </>
    ) */
}

TestInstance.propTypes = {

}

export default TestInstance;

