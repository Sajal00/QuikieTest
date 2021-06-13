import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Dimensions, TouchableOpacity, FlatList, ScrollView } from 'react-native';
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;
import Header from "../../Component/Header";
import Footer from "../../Component/Footter";

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	state = this.state;

	render() {
		return (

			<View style={styles.Container}>
			<StatusBar backgroundColor="#00001f" barStyle='light-content' />
				<Header />
				<View style={{ backgroundColor: "#00001f", width: Devicewidth, height: Deviceheight / 1.25 }}>
					<Text style={{ color: "#fff", fontSize: 14, textAlign: 'left', marginLeft: 15, marginTop: 10 }}>NEWS</Text>
					<View style={{ backgroundColor: "#2A2656", width: Devicewidth / 1.3, height: Deviceheight / 1.5, alignSelf: 'center', marginTop: 30, borderRadius: 15 }}>
					<View style={{
						height: Deviceheight / 1.8,
						width: Devicewidth / 1.3, alignItems: "center", justifyContent: "center", alignSelf: "center",borderTopRightRadius:15,borderTopLeftRadius:15
					}} >
						<Image source={require("../../Assets/ImageHome.png")} style={{ height: "100%", width: "100%", resizeMode: 'cover',borderTopLeftRadius:10,borderTopRightRadius:10 }} />
					</View>
					<Text style={{ color: "#fff", fontSize: 14, textAlign: 'left', marginLeft: 15, marginTop: 10 }}>Nike Joyride</Text>
					<Text style={{ color: "#fff", fontSize: 12, textAlign: 'left', marginLeft: 15, marginTop: 10 }}>Lorem ipsum dolor sit amet, consectetur</Text>
					</View>
					


				</View>
				<Footer />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#00001f'
	},
})