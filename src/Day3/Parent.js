import React from 'react'

export default function Parent() {
  return (
    <div>
        <Child name="Karthik"></Child>
    </div>
  )
}
function Child (props)
{
    return(
        <div>
            <h1>My Name is {props.name}</h1>
        </div>
    )
}
