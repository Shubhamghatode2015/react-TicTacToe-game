import React from 'react'

const Square = (props) => {
  return (
    <div className='Square' onClick={props.onClick}>
       <h2>{props.value}</h2>
    </div>
  )
}

export default Square
