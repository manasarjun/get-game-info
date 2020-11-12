import React from 'react'

import fetchData from '../../utils/fetchData';

function GameSchedule({ upcoming, results }) {

  const handleShow = (id) => {
    fetchData(id, 'id')
      .then(res => res.json())
      .then(data => console.log(data))
  }



  const showGames = (games, gameType) => {
    return (
      <>
        {gameType === 'Upcoming' ? <h3> Upcoming </h3> : <h3> Results </h3>}
        <ul>
          {games && games.map(u => (<li onClick={() => handleShow(u.id)}><p>{u.id}</p>
            <p>{u.startTime}</p>
          </li>))}

        </ul>
      </>
    )
  }

  const renderer = () => {
    return (<>
      { upcoming && upcoming.length > 0 ? showGames(upcoming, 'Upcoming') : showGames(results, 'Results')}
    </>);
  }

  return renderer();

}

export default GameSchedule;