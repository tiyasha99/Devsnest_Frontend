import React from 'react'
import './Card.css'

function Card({food,calories}){
  return(
    <div className='cards'>
      <h3>{food}</h3>
      <p>This food contains {calories} calories.</p>
    </div>
  )
}
export default Card;