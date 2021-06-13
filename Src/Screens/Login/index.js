import React, { Component } from 'react';
import { View, Text, StatusBar, Image, StyleSheet, TextInput, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

export default class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
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
				<View style={{ height: Deviceheight / 4, width: Devicewidth / 2, borderRadius: 360, borderWidth: 1, borderColor: "#5098F2", alignItems: 'center', justifyContent: 'center', }}>
					<Image source={require("../../Assets/LOGO.png")} style={{ height: "60%", width: "60%", resizeMode: "contain" }} />

				</View>
				{/* input container */}
				<View style={{ height: Deviceheight / 4, width: Devicewidth / 1.2, alignItems: 'center', justifyContent: 'center', }}>
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
					<View style={{
						borderBottomColor: "#fff",
						borderWidth: 0.5,
						flexDirection: "row",
						alignItems: "center", justifyContent: "center"
					}}>
						<TextInput
							placeholder={'Password'}
							placeholderTextColor={'#fff'}
							style={{
								width: Devicewidth / 1.4,
								height: 65,
								fontSize: 12,
								color: "#fff"
							}}
							secureTextEntry={true}
							autoCapitalize="none"
							onChangeText={(val) =>
								this.setState({
									password: val
								})
							}
							value={this.state.password}
						/>
						<View style={{ height: Deviceheight / 60, width: Devicewidth / 25, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
							<Image source={require("../../Assets/right.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
						</View>
					</View>

					{/* forgot password button */}
					<TouchableOpacity onPress={() => this.props.navigation.navigate('forgotPassword')} style={{ alignSelf: 'flex-start', marginTop: 10, marginLeft: 15 }}>
						<Text style={{ color: "#fff", fontSize: 12, textAlign: 'left' }}>Forgot Password</Text>
					</TouchableOpacity>
				</View>

				{/* login button */}
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate('home')}
					style={{ backgroundColor: "#5098F2", alignSelf: "center", alignItems: "center", justifyContent: "center", marginTop: 60, height: Deviceheight / 18, width: Devicewidth / 1.4, borderRadius: 50 }}>
					<Text style={{ color: "#fff", fontSize: 12, textAlign: 'center' }}>LOG IN</Text>
				</TouchableOpacity>

				{/* don't have account button */}
				<View style={{
					flexDirection: "row",
					alignItems: "center", justifyContent: "center", marginTop: 50
				}}>
					<Text style={{ color: "#fff", fontSize: 12, textAlign: 'center' }}>Don't have an account?  </Text>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('registration')}>
						<Text style={{ color: "#fff", fontSize: 12, textAlign: 'center' }}>Create One</Text>
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