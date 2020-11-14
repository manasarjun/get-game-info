import React, { useRef, useState } from 'react';
import '../../App.css';

import GameSchedule from "../gameSchedule/GameSchedule";
import fetchData from '../../utils/fetchData'

function GetGameInfo() {
  const gameType = useRef(null);
  const [closestGame, setClosestGame] = useState(null);

  const handleOnClick = (e) => {
    e.preventDefault();
    const keyword = gameType.current.value.toUpperCase();
    fetchData(keyword)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else if (res.status === 404) {
          return Promise.reject('error 404')
        } else {
          return Promise.reject('some other error: ' + res.status)
        }
      })
      .then(data => {
        data.upcoming.length > 0 ? setClosestGame(data.upcoming[0]) : setClosestGame(data.results[0])
      }).catch(err => alert('Please enter a valid game type'))
    gameType.current.value = '';
  }

  console.log(closestGame);

  return (
    <>
      <form onSubmit={handleOnClick}>
        <input className='text-field' ref={gameType} type='text' placeholder='enter game type' />
      </form>
      {closestGame && <GameSchedule game={closestGame} />}
    </>
  )
}

export default GetGameInfo;

