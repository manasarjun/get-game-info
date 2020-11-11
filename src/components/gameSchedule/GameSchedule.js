import React from 'react'

function GameSchedule({ upcoming, results }) {

  const showGames = (games, gameType) => {
    return (
      <>
        {gameType === 'Upcoming' ? <h3> Upcoming </h3> : <h3> Results </h3>}
        <ul>
          {games && games.map(u => (<li><p>{u.id}</p>
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