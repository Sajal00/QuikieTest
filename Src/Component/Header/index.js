import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

export default class Hrader extends Component {


  render() {

    return (
      <View style={styles.headerLeftAll}>
        <StatusBar backgroundColor="#00001f" barStyle='light-content' />
        <View style={{ height: Deviceheight / 11, width: Devicewidth / 3, alignItems: 'center', justifyContent: "space-around", flexDirection: "row", }}>
          <View style={{ height: Deviceheight / 12, width: Devicewidth / 6, borderRadius: 360, justifyContent: "center", alignItems: "center", }}>
            <Image source={require("../../Assets/profile.png")} style={{ height: "100%", width: "100%", resizeMode: "contain", borderRadius: 360 }} />

          </View>
          <Text style={{ color: "#fff" }}>Davidw</Text>

        </View>
        <View style={{ height: Deviceheight / 11, width: Devicewidth / 3, alignItems: 'center', justifyContent: "space-around", flexDirection: "row", }}>
          <View>
            <Text style={{ color: "#fff", fontSize: 12, textAlign: "center" }}>Points</Text>
            <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}>40</Text>
          </View>

          <View style={{ height: Deviceheight / 12, width: Devicewidth / 6, borderRadius: 360, justifyContent: "center", alignItems: "center" }}>
            <Image source={require("../../Assets/home1.png")} style={{ height: "100%", width: "100%", resizeMode: "contain", borderRadius: 360 }} />
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerLeftAll: {
    paddingTop: 5,
    width: Devicewidth,
    backgroundColor: "#00001f",
    height: Deviceheight / 9,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal:10,
    paddingVertical:10
  },


})
