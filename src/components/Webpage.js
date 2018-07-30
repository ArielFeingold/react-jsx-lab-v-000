import React, { Component } from 'react' // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom'
import FillerText from './FillerText'

class Webpage extends Component {
  render() {
    return (
      <div>
        <title>The world's coolest webpage</title>
        <FillerText />
        <FillerText />
      </div>
    );
  }
}

export default Webpage
