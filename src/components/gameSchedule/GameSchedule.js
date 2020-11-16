import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import fetchData from '../../utils/fetchData';
import GameData from '../GameData/GameData'
import '../../App.css';

function GameSchedule(props) {

  const { game, upComingOrResults } = props.closestGame;
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    fetchData(game.id, 'id')
      .then(res => res.json())
      .then(data => setGameData(data))
  }, [game.id]);

  return (
    <>
      <h3>{`Closest ${upComingOrResults} Game`}</h3>

      { gameData && <GameData data={gameData} />}
    </>
  );
}

GameSchedule.prototype = {
  game: PropTypes.shape({
    id: PropTypes.number
  })
}

export default GameSchedule;
