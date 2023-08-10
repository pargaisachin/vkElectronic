import React from 'react'

export default function Button(props) {
  return (
    <button onClick={props.handleClick} className='bg-orange-700 rounded-lg text-white text-lg px-4 py-2 my-2'>{props.text}</button>
  )
}
