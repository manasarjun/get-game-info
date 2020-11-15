import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function StartsInfo({ starts }) {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isCollapsable, setIsCollapsable] = useState(false);


  const handleCollapsable = () => {
    setIsCollapsable(false);
  }

  const handleShow = (index) => () => {
    setCurrentIndex(index)
    setIsCollapsable(true);
  }

  return (
    <ul className='start-list'>{starts.map(
      (s, index) => (
        <li className='start-data' key={index}>
          <p>Start Number: {s.number}</p>
          <p>HorseName: {s.horse.name}</p>
          <p>Driver Name: {s.driver.firstName + '' + s.driver.lastName}</p>
          {index === currentIndex && isCollapsable ?
            <>
              <button onClick={handleCollapsable}><i className="material-icons">keyboard_arrow_up</i></button>
              <p>Trainer Name: {s.horse.trainer.firstName + '' + s.horse.trainer.lastName}</p>
              <p>Horse Father Name: {s.horse.pedigree.father.name}</p>
            </>
            :
            <button onClick={handleShow(index)}><i className="material-icons">keyboard_arrow_down</i></button>
          }
        </li>
      )
    )}
    </ul>
  )
}

StartsInfo.prototype = {
  starts: PropTypes.shape({
    number: PropTypes.number,
    horse: PropTypes.shape({
      name: PropTypes.string,
      pedigree: PropTypes.shape({
        father: PropTypes.shape({
          name: PropTypes.string,
        })
      })
    }),
    driver: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    trainer: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),


  })
}

export default StartsInfo;