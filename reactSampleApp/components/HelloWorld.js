import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

class CustomCard extends Component {
  render() {
    return (
      <View style={{alignContent: 'center'}}>
        <Text>{this.props.name}</Text>
        <Text>{this.props.age}</Text>
        <Text />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
    );
  }
} //Default class..

export default class Custom extends Component {
  render() {
    return (
      <View>
        <CustomCard name="Prashant" age="21" />
      </View>
    );
  }
}
