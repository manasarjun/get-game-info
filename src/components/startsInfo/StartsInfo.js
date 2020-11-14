import React from 'react'

function StartsInfo({ starts }) {
  return (
    <ul className='start_list'>{starts.map(s => <li className='start_data' key={s.number}>
      <p>
        number: {s.number}
      </p>
      <p>HorseName: {s.horse.name}</p>
      <p>Driver Name: {s.driver.firstName + '' + s.driver.lastName}</p>
      <p>Trainer Name: {s.horse.trainer.firstName + '' + s.horse.trainer.lastName}</p>
      <p>Horse Father Name: {s.horse.pedigree.father.name}</p>
    </li>)}
    </ul>)
}

export default StartsInfo;