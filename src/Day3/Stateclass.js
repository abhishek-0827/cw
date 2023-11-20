import React, { Component } from 'react'

export default class Stateclass extends Component {
    state={
        name:"SKCET",
        place:"cbe"
    }
  render() {
    return (
      <div>
         <h1>i am studing at {this.name.state} place {this.state.place}</h1>
      </div>
    )
  }
}
