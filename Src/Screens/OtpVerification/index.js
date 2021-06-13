import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity,StatusBar } from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

export default class OtpVerification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            otp: '',
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
                <View style={{ height: Deviceheight / 7, width: Devicewidth / 1.2, alignItems: 'center', justifyContent: 'center', marginBottom: 30 }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: 'flex-start', marginRight:95
                    }}>

                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ height: Deviceheight / 32, width: Devicewidth / 13, alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                            <Image source={require("../../Assets/back.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                        </TouchableOpacity>
                        <Text style={{ color: "#fff", fontSize: 28, textAlign: 'left' }}>  Verification</Text>
                    </View>
                    <Text style={{ color: "#fff", fontSize: 12, width: Devicewidth / 1.4, textAlign: "left", marginTop: 20 }}>We have sent you a verification code to your email id abc123@gmail.com</Text>

                </View>
                {/* input container */}
                <View style={{ height: Deviceheight / 6, width: Devicewidth / 1.2, alignItems: 'center', justifyContent: 'center' ,}}>
                    <View style={{
                        alignItems: "center", justifyContent: "center",
                    }}>
                        <OTPTextView
                            ref={(e) => (this.input1 = e)}
                            defaultValue=''
                            color={"#fff"}
                            handleTextChange={(text) => this.setState({ otp: text })}
                            inputCount={4}
                            tintColor={"#fff"}
                            keyboardType="numeric"
                        />
                    </View>

                    {/* Resend password */}
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center", justifyContent: "center", marginTop: 40
                    }}>
                        <Text style={{ color: "#fff", fontSize: 12, textAlign: 'center' }}>Don't get a code?  </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
                            <Text style={{ color: "#fff", fontSize: 12, textAlign: 'center' }}>Tap to resend</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* login button */}
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('resetPassword')}
                    style={{ backgroundColor: "#5098F2", alignSelf: "center", alignItems: "center", justifyContent: "center", marginTop: 90, height: Deviceheight / 18, width: Devicewidth / 1.4, borderRadius: 50 }}>
                    <Text style={{ color: "#fff", fontSize: 12, textAlign: 'center' }}>VERIFY</Text>
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