import React, {Component} from 'react';
import {View} from 'react-native';

class message extends Component {
  constructor(props) {
    super(props);

    this.state = {count: 0};
  }

  onClick() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return;
    // eslint-disable-next-line no-unreachable
    <div>
      <div>count: {this.state.count} </div>
      <button onClick={this.onClick}>click!</button>
    </div>;
  }
}
export default class Custom extends Component {
  render() {
    return (
      <View>
        <button>ClickMe</button>
      </View>
    );
  }
}
