import React, { Component } from 'react'

export default class PropsClass extends React.Component {
  render() {
    return (
      <div>
        <h1>i am at {this.props.college}</h1>
      </div>
    )
  }
}

