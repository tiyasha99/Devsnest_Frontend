import React from 'react'
import './Header.css'

function Header({title}){

  return (
      <div className="heading">
       <h2>{title}</h2>
      </div>

  )
}
export default Header;