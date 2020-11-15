import React, { useState } from "react";
import PropTypes from 'prop-types';

import StartsInfo from '../StartsInfo/StartsInfo'

function GameData({ data }) {

  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [hideIndex, setHideIndex] = useState(null);

  const handleStartInfo = (index) => (e) => {
    setIsExpanded(true);
    setCurrentIndex(index);
  }

  const handleHideInfo = (i) => () => {
    setCurrentIndex(null)
    setIsExpanded(false)
  }

  const prettyPrint = (string) => {
    const t = string.indexOf('T');
    const date = string.substring(0, t);
    const time = string.substring(t + 1);
    return <>{date} <b>{time}</b></>;
  };

  return (<>
    <ul className='game_data'>
      <h2>Races</h2>
      {data && data.races.map(
        (race, index) => (
          <li key={index} className='data_items'>
            <p>Race Number: {race.number}</p>
            {race.name && <p>Race Name: {race.name}</p>}
            <p>Race Start Time: {prettyPrint(race.startTime)}</p>
            {
              (currentIndex === index && isExpanded) ?
                <>
                  <button onClick={handleHideInfo(index)}>Hide starts Info</button>
                  <StartsInfo starts={race.starts} />
                </>
                : <button onClick={handleStartInfo(index)}>Show starts Info</button>
            }
          </li>)
      )}
    </ul>
  </>
  );

}

GameData.propTypes = {
  data: PropTypes.shape({
    number: PropTypes.number,
    name: PropTypes.string,
    startTime: PropTypes.string,
    starts: PropTypes.array

  }

  )
}

export default GameData;