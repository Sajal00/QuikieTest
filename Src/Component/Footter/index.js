import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    StatusBar
} from 'react-native';
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;



const Footer = (props) => {

    return (
        <View style={styles.Container}>
        <StatusBar backgroundColor="#00001f" barStyle='light-content'  />

            <View style={styles.IconContainer}>

                <TouchableOpacity style={{
                    height: Deviceheight / 28,
                    width: Devicewidth / 10, alignItems: "center", justifyContent: "center", alignSelf: "center",
                }} >
                   <Image source={require("../../Assets/home.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                </TouchableOpacity>



                <TouchableOpacity style={{
                    height: Deviceheight / 28,
                    width: Devicewidth / 10, alignItems: "center", justifyContent: "center", alignSelf: "center",
                }}  >
                    <Image source={require("../../Assets/tech.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                </TouchableOpacity>



                <TouchableOpacity style={{
                    height: Deviceheight / 28,
                    width: Devicewidth / 14, alignItems: "center", justifyContent: "center", alignSelf: "center",
                }}   >
                    <Image source={require("../../Assets/cup.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                </TouchableOpacity>


                <TouchableOpacity style={{
                    height: Deviceheight / 28,
                    width: Devicewidth / 14, alignItems: "center", justifyContent: "center", alignSelf: "center",
                }}  >
                   <Image source={require("../../Assets/cart.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        alignSelf: 'flex-end',
        justifyContent: "center",
        width: Devicewidth,
        height: Deviceheight / 10.5,
        backgroundColor:"#00001f"
    },
    IconContainer: {
        justifyContent: 'space-around',
        alignItems: "center",
        flexDirection: "row",
        width: Devicewidth,
        alignSelf:'center',
        // backgroundColor:'red',
    },
})
export default(Footer);