import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
	componentWillMount(){
		firebase.initializeApp({
	    apiKey: 'AIzaSyCaHVtjrdsew_M1OLtsP7VVbznJnq7PicI',
	    authDomain: 'react-authentication.firebaseapp.com',
	    databaseURL: 'https://react-authentication.firebaseio.com',
	    storageBucket: 'react-authentication.appspot.com',
	    messagingSenderId: '275980880544'
		});
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<Text>An App!</Text>
			</View>
		);
	}
}

export default App;