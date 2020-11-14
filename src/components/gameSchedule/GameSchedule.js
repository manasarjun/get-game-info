import React, { useState, useEffect } from 'react'

import fetchData from '../../utils/fetchData';
import '../../App.css';
import GameData from '../gameData/GameData'

function GameSchedule({ game }) {

  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    fetchData(game.id, 'id')
      .then(res => res.json())
      .then(data => setGameData(data))
  }, [game.id]);

  console.log(gameData);
  const renderer = () => {
    return (<>
      { gameData && <GameData data={gameData} />}
    </>);
  }

  return renderer();

}


export default GameSchedule;