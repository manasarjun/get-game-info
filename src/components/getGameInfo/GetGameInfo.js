import React, { useRef, useState } from 'react';
import GameSchedule from "../GameSchedule/GameSchedule";
import fetchData from '../../utils/fetchData'
import '../../App.css';

function GetGameInfo() {
  const gameType = useRef(null);
  const [closestGame, setClosestGame] = useState({});
  const [displayGameType, setdisplayGameType] = useState(null);

  const handleError = (err) => {
    alert('Please enter a valid game type (Valid Game Types: V4, V64, V65, V75)')
    console.log(err);
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
        data.upcoming && data.upcoming.length > 0 ? setClosestGame({ game: data.upcoming[0], upComingOrResults: 'Upcoming' }) : setClosestGame({ game: data.results[0], upComingOrResults: 'Results' })
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
      {displayGameType ? <h2>Game: {displayGameType}</h2>
        : <p>Please enter a game type</p>
      }
      {closestGame.game && <GameSchedule closestGame={closestGame} />}
    </>
  )
}

export default GetGameInfo;

