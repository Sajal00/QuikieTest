import React, { Component } from 'react';
import { View, Text, StatusBar, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
        }
    }
    state = this.state;
    async componentDidMount() {

    }
    render() {
        return (
            <View style={styles.Container}>
                <StatusBar backgroundColor="#00001f" barStyle='light-content' />
                {/* Logo */}
                <View style={{ height: Deviceheight / 6, width: Devicewidth / 3, borderRadius: 360, borderWidth: 1, borderColor: "#5098F2", alignItems: 'center', justifyContent: 'center', marginBottom: 30 }}>
                    <Image source={require("../../Assets/LOGO.png")} style={{ height: "60%", width: "60%", resizeMode: "contain" }} />

                </View>
                {/* Forgot header */}
                <View style={{ height: Deviceheight / 7, width: Devicewidth / 1.2, alignItems: 'center', justifyContent: 'center' ,marginBottom:30}}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center", justifyContent: "center",marginRight:15
                    }}>

                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ height: Deviceheight / 32, width: Devicewidth / 13, alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                            <Image source={require("../../Assets/back.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                        </TouchableOpacity>
                        <Text style={{ color: "#fff", fontSize: 28, textAlign: 'center' }}>  Forgot Password?</Text>
                    </View>
                    <Text style={{ color: "#fff", fontSize: 12, width: Devicewidth / 1.4, textAlign: "left", marginTop: 20 }}>Give us your registerd email adderess and we'll send you link to reset your passoward</Text>

                </View>
                {/* input container */}
                <View style={{ height: Deviceheight / 8, width: Devicewidth / 1.2, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{
                        borderBottomColor: "#fff",
                        borderWidth: 0.5,
                        flexDirection: "row",
                        alignItems: "center", justifyContent: "center"
                    }}>
                        <TextInput
                            placeholder={'Email'}
                            placeholderTextColor={'#fff'}
                            style={{
                                width: Devicewidth / 1.4,
                                height: 65,
                                fontSize: 12,
                                color: "#fff"
                            }}
                            autoCapitalize="none"
                            onChangeText={(val) =>
                                this.setState({
                                    email: val
                                })
                            }
                            value={this.state.email}
                        />
                        <View style={{ height: Deviceheight / 60, width: Devicewidth / 25, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <Image source={require("../../Assets/right.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                        </View>
                    </View>

                </View>

                {/* login button */}
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('otpVerification')}
                    style={{ backgroundColor: "#5098F2", alignSelf: "center", alignItems: "center", justifyContent: "center", marginTop: 1, height: Deviceheight / 18, width: Devicewidth / 1.4, borderRadius: 50 }}>
                    <Text style={{ color: "#fff", fontSize: 12, textAlign: 'center' }}>SEND</Text>
                </TouchableOpacity>

                {/* don't have account button */}
                <View style={{
                    flexDirection: "row",
                    alignItems: "center", justifyContent: "center", marginTop: 50
                }}>
                    <Text style={{ color: "#fff", fontSize: 12, textAlign: 'center' }}>Have an account?  </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
                        <Text style={{ color: "#fff", fontSize: 12, textAlign: 'center' }}>login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#00001f"
    },
})