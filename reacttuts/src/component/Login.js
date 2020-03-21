import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <View>
          <Text style={styles.header}>Login Page</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
  },
  header: {
    textAlign: 'center',
    fontSize: 22,
    color: 'black',
  },
  edtContainer: {
    alignContent: 'center',
  },
});
