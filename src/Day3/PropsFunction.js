import React from 'react'

export default function Prop(props) {
  return (
    <div>
        <h1>my name is {props.name} and my age is {props.age}</h1>
    </div>
  )
}
Prop.defaultProps={age:20}