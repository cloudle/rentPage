import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0
    };

    setInterval(this.tick.bind(this), 500);
  }

  tick () {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return <div>
      <h1>Hello, world!! {this.state.count}</h1>
      <RaisedButton label="Hello" />
    </div>;
  }
}
