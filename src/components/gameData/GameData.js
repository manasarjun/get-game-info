import React, { useState } from "react";

import StartsInfo from '../startsInfo/StartsInfo'

function GameData({ data }) {

  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleStartInfo = (index) => {
    console.log(index);
    setCurrentIndex(index);
    if (isExpanded === false) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }

  }

  return (<>
    <ul className='game_data'>
      <h2>Game Type: {Object.keys(data.pools)[0]}</h2>
      <h2>Races</h2>
      {data.races.map((r, index) => <li key={index} className='data_items'>
        {r.name && <p>name: {r.name}</p>}
        <p>number: {r.number}</p>
        <p>startTime: {r.startTime}</p>
        <p >Starts Information
         <button onClick={() => handleStartInfo(index)}> {(currentIndex === index && isExpanded) ? '-' : '+'}</button>
        </p>
        {currentIndex === index && isExpanded && <StartsInfo starts={r.starts} />}
      </li>)}
    </ul>
  </>
  );

}

export default GameData;