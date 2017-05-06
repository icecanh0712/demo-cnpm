
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Hutech extends Component {
  render() {
    return (
      <View style={styles.container}>
      
            <Image
              style={{width:200, height: 200}}
              source={{uri:'http://bidesign.vn/uploads/advertise/logo-moi-cua-hutech-1.jpg'}}
            />

            <Text style={styles.text}>Trường Đại Học Công Nghệ </Text>
            <Text style={styles.text}> TPHCM </Text>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1c40f',
  },
  text:{
    fontSize:25,
    color:'white',
  }
});
AppRegistry.registerComponent('Hutech', () => Hutech);
