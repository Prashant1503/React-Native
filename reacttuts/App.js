import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Login from './src/component/Login';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItem from './src/component/VideoItem';
import data from './src/data.json';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Image
            source={require('./src/Assets/you_tube_icon.png')}
            style={{width: 40, height: 40}}
          />
          <View style={styles.rightNav}>
            <TouchableOpacity>
              <Image
                source={require('./src/Assets/search_icon.png')}
                style={{height: 22, width: 25}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('./src/Assets/account_icon.png')}
                style={{height: 22, width: 25, marginStart: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            data={data.items}
            renderItem={video => <VideoItem video={video.item} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{height:0.5,backgroundColor:'#cccccc'}} />}
          />
        </View>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Image
              source={require('./src/Assets/home_icon.png')}
              style={{height: 28, width: 28}}
            />
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Image
              source={require('./src/Assets/whatshot_ion.png')}
              style={{height: 28, width: 28}}
            />
            <Text style={styles.tabTitle}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Image
              source={require('./src/Assets/library_icon.png')}
              style={{height: 28, width: 28}}
            />
            <Text style={styles.tabTitle}>Subscriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Image
              source={require('./src/Assets/folder_icon.png')}
              style={{height: 28, width: 28}}
            />
            <Text style={styles.tabTitle}>Library</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    height: 55,
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    marginLeft: 25,
  },
  body: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: 'white',
    borderTopWidth: 0.5,
    borderColor: '#E5E5E5',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTitle: {
    fontSize: 11,
    padding: 4,
  },
});
