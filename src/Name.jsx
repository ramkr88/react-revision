import React from 'react'

function Name(props) {
  return (
    <div>
      <h2>Hello {props.name}</h2>
      <h2>Age is {props.age}</h2>
      <h2>Count is {props.count}</h2>
    </div>
  )
}

export default Name


