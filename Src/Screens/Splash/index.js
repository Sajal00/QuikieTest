import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, StatusBar } from 'react-native';

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

export default class Splash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginStatus: '0',
    }
  }
  state = this.state;

  async componentDidMount() {
    const { navigation } = this.props
    try {
      if (this.state.loginStatus == 1) {
        setTimeout(() => {
          navigation.push('home');
        }, 2000)
      }
      else {
        setTimeout(() => {
          navigation.push('auth');
        }, 2000)
      }

    } catch (e) {
      // error reading value
    }

  }


  render() {
    return (
      <View style={styles.Container}>
        <StatusBar backgroundColor="#00001f" barStyle='light-content' />
        <View style={{ height: Deviceheight / 2.6, width: Devicewidth / 1.3, borderRadius: 360, borderWidth: 1, borderColor: "#5098F2", alignItems: 'center', justifyContent: 'center', }}>
            <Image source={require("../../Assets/LOGO.png")} style={{height:"60%",width:"60%",resizeMode:"contain"}}/>

        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#00001f"
  },
})
