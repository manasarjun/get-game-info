import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import fetchData from '../../utils/fetchData';
import '../../App.css';
import GameData from '../GameData/GameData'

function GameSchedule({ game }) {

  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    fetchData(game.id, 'id')
      .then(res => res.json())
      .then(data => setGameData(data))
  }, [game.id]);

  const renderer = () => {
    return (<>
      { gameData && <GameData data={gameData} />}
    </>);
  }

  return renderer();

}

GameSchedule.prototype = {
  game: PropTypes.shape({
    id: PropTypes.number
  })
}

export default GameSchedule;