import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, StatusBar, Image, TouchableOpacity, } from 'react-native';
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

export default class Registration extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			username: "",
			password: "",
			confirmPassword: "",
		}
	}
	state = this.state;


	render() {
		return (
			<View style={styles.Container}>
				<StatusBar backgroundColor="#00001f" barStyle='light-content' />

				{/* Image picker section */}
				<View style={{
					alignItems: "center", justifyContent: 'center', width: Devicewidth / 2.5, height: Deviceheight / 5,
				}}>
					<Text style={{ color: "#fff", fontSize: 12, textAlign: 'center', marginBottom: 10 }}>PROFILE PICTURE</Text>
					<TouchableOpacity style={{ height: Deviceheight / 7, width: Devicewidth / 3.5, borderRadius: 360, borderColor: "#fff",borderWidth: 0.5,alignItems: 'center', justifyContent: 'center', }}>
						<Image source={require("../../Assets/camera.png")} style={{ height: "30%", width: "30%", resizeMode: "contain" }} />
					</TouchableOpacity>
				</View>

				{/* gender container */}
				<View style={{
					flexDirection: "row",
					alignItems: "center", justifyContent: 'space-around',  width: Devicewidth / 1.8, height: Deviceheight / 8
				}}>
					<TouchableOpacity style={{ height: Deviceheight / 10, width: Devicewidth / 7, alignItems: "center", justifyContent: "center", }}>
						<View style={{ height: Deviceheight / 18, width: Devicewidth / 9, borderRadius: 360, backgroundColor: "#5098F2", alignItems: 'center', justifyContent: 'center', }}>
							<Image source={require("../../Assets/male.png")} style={{ height: "60%", width: "60%", resizeMode: "contain" }} />
						</View>
						<Text style={{ color: "#fff", fontSize: 12, textAlign: 'center', marginTop: 5 }}>Male</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ height: Deviceheight / 10, width: Devicewidth / 7, alignItems: "center", justifyContent: "center", }}>
						<View style={{ height: Deviceheight / 18, width: Devicewidth / 9, borderRadius: 360, backgroundColor: "#00001f", alignItems: 'center', justifyContent: 'center', }}>
							<Image source={require("../../Assets/female.png")} style={{ height: "60%", width: "60%", resizeMode: "contain" }} />
						</View>
						<Text style={{ color: "#fff", fontSize: 12, textAlign: 'center', marginTop: 5 }}>Female</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ height: Deviceheight / 10, width: Devicewidth / 7, alignItems: "center", justifyContent: "center", }}>
						<View style={{ height: Deviceheight / 18, width: Devicewidth / 9, borderRadius: 360, backgroundColor: "#00001f", alignItems: 'center', justifyContent: 'center', }}>
							<Image source={require("../../Assets/male1.png")} style={{ height: "60%", width: "60%", resizeMode: "contain" }} />
						</View>
						<Text style={{ color: "#fff", fontSize: 12, textAlign: 'center', marginTop: 5 }}>Others</Text>
					</TouchableOpacity>
				</View>

				{/* input container */}
				<View style={{ width: Devicewidth / 1.2, alignItems: 'center', justifyContent: 'center',  paddingVertical: 15, }}>
					<View style={{
						borderBottomColor: "#fff",
						borderWidth: 0.5,
						flexDirection: "row",
						alignItems: "center", justifyContent: "center"
					}}>
						<TextInput
							placeholder={'Username'}
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
									username: val
								})
							}
							value={this.state.username}
						/>
						<View style={{ height: Deviceheight / 60, width: Devicewidth / 25, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
							<Image source={require("../../Assets/right.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
						</View>
					</View>
					<View style={{
						borderBottomColor: "#fff",
						borderWidth: 0.5,
						flexDirection: "row",
						alignItems: "center", justifyContent: "center",marginBottom:2
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
							secureTextEntry={true}
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
					<View style={{
						borderBottomColor: "#fff",
						borderWidth: 0.5,
						flexDirection: "row",
						alignItems: "center", justifyContent: "center"
					}}>

						<TextInput
							placeholder={'Confirm password'}
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
									confirmPassword: val
								})
							}
							value={this.state.confirmPassword}
						/>
						<View style={{ height: Deviceheight / 60, width: Devicewidth / 25, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
							<Image source={require("../../Assets/right.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
						</View>
					</View>
				</View>

				{/* create account */}
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate('login')}
					style={{ backgroundColor: "#5098F2", alignSelf: "center", alignItems: "center", justifyContent: "center", height: Deviceheight / 18, width: Devicewidth / 1.4, borderRadius: 50,marginTop:20,marginBottom:20 }}>
					<Text style={{ color: "#fff", fontSize: 12, textAlign: 'center' }}>Create account</Text>
				</TouchableOpacity>

				{/* have an account? login */}
				<View style={{
					flexDirection: "row",
					alignItems: "center", justifyContent: "center", 
				}}>
					<Text style={{ color: "#fff", fontSize: 12, textAlign: 'center' }}>Have an account?  </Text>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
						<Text style={{ color: "#fff", fontSize: 12, textAlign: 'center' }}>Login</Text>
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
	}
})