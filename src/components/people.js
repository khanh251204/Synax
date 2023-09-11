import React from 'react'

const People = (props) => {
  return (
    <div>
      <p>Your name: {props.fullName}</p>
      <p>Your name: {props.age}</p>
      <p>Your name: {props.class}</p>
    </div>
  )
}

export default People
