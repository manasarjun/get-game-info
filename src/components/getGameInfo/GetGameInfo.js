import React, { useRef, useState } from 'react';
import GameSchedule from "../GameSchedule/GameSchedule";
import fetchData from '../../utils/fetchData'
import '../../App.css';

function GetGameInfo() {
  const gameType = useRef(null);
  const [closestGame, setClosestGame] = useState();
  const [displayGameType, setdisplayGameType] = useState(null);
  const handleError = (err) => {
    alert('Please enter a valid game type (Valid Game Types: V4, V64, V65, V75)')
    console.log('in handler---->', err);
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const keyword = gameType.current.value.toUpperCase();
    fetchData(keyword)
      .then(res => {
        if (res.status !== 200 && !res.ok) {
          throw new Error(res);
        }
        return res.json();
      })
      .then(data => {
        setdisplayGameType(data.betType);
        data.upcoming ? setClosestGame(data.upcoming[0]) : setClosestGame(data.results[0])
      }).catch(handleError)
    gameType.current.value = '';
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          className='text-field'
          type='text'
          placeholder='enter game type'
          ref={gameType}
        />
      </form>
      {displayGameType ? <h1>Game Type: {displayGameType}</h1>
        : <p>Please enter a game type</p>
      }
      {closestGame && <GameSchedule game={closestGame} />}
    </>
  )
}

export default GetGameInfo;

