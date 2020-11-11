import React, { useRef, useState } from 'react';
import '../../App.css';

import fetchData from '../../fetchData';
import GameSchedule from "../gameSchedule/GameSchedule";

function GetGameInfo() {
  const gameType = useRef(null);
  const [results, setResults] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const handleOnClick = (e) => {
    e.preventDefault();
    const keyword = gameType.current.value;
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
        setResults(data.results)
        setUpcoming(data.upcoming)
      }).catch(err => alert('Please enter a valid game type'))
    gameType.current.value = '';
  }

  return (
    <>
      <form onSubmit={handleOnClick}>
        <input className='text-field' ref={gameType} type='text' placeholder='enter game type' />
      </form>
      <GameSchedule upcoming={upcoming} results={results} />
    </>
  )
}

export default GetGameInfo;

