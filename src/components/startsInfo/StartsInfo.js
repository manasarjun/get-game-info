import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import TestInstance from './TestInstance';

let track = [];
function StartsInfo({ starts }) {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isCollapsable, setIsCollapsable] = useState(false);
  const [toggle, setToggle] = useState({ id: null, isOpen: false });

  useEffect(() => {
    console.log('track', track)
    // track.push(toggle);

  }, [toggle])

  const handleCollapsable = () => {
    setIsCollapsable(false);
  }

  const handleShow = (index) => () => {
    setCurrentIndex(index)
    setIsCollapsable(true);
  }

  const tracking = () => {

  }
  const handleToggle = (id, hide) => (e) => {
    setToggle({ id: id, isOpen: !toggle.isOpen });
    track.push({ id: id, isOpen: !toggle.isOpen });
    if (hide) {

      track.forEach((element) => {
        if (element.id === id) {
          element.isOpen = !element.isOpen;
        }
      });
      setToggle({ id: id, isOpen: toggle.isOpen });

    }
  };

  console.log('toggle', toggle);

  return (
    <ul className='start_list'>{starts && starts.map(
      (s, index) => {
        return (
          <li className='start_data' key={index} >
            <p>Start Number: {s.number}</p>
            <p>HorseName: {s.horse.name}</p>
            <p>Driver Name: {s.driver.firstName + '' + s.driver.lastName}</p>

            <button onClick={handleToggle(s.number)} data-id={s.number}>
              show more
            </button>
            <button onClick={handleToggle(s.number, 'hide')} data-id={s.number}>
              show less
            </button>
            <TestInstance
              toggle={toggle}
              firstName={s.horse.trainer.firstName}
              id={s.number}
              track={track}
              handleToggle={handleToggle}
            />
            {/*      {toggle ?
              <>
                <p>Trainer Name: {s.horse.trainer.firstName + '' + s.horse.trainer.lastName}</p>
                <p>Horse Father Name: {s.horse.pedigree.father.name}</p>
              </>
              : null
            } */}
          </li>
        )
      }
    )}
    </ul>)
  /*   return (
      <ul className='start_list'>{starts.map(
        (s, index) => (
          <li className='start_data' key={index}>
            <p>Start Number: {s.number}</p>
            <p>HorseName: {s.horse.name}</p>
            <p>Driver Name: {s.driver.firstName + '' + s.driver.lastName}</p>
  
            {index === currentIndex && isCollapsable ?
              <>
                <button onClick={handleCollapsable}>show less</button>
                <p>Trainer Name: {s.horse.trainer.firstName + '' + s.horse.trainer.lastName}</p>
                <p>Horse Father Name: {s.horse.pedigree.father.name}</p>
              </>
              :
              <button onClick={handleShow(index)}>show more</button>
            }
          </li>
        )
      )}
      </ul>) */
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