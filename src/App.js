import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };
	componentWillMount() {
		firebase.initializeApp({
	    apiKey: 'AIzaSyCaHVtjrdsew_M1OLtsP7VVbznJnq7PicI',
	    authDomain: 'react-authentication.firebaseapp.com',
	    databaseURL: 'https://react-authentication.firebaseio.com',
	    storageBucket: 'react-authentication.appspot.com',
	    messagingSenderId: '275980880544'
		});
	
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}
	
	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return <Button>Log out</Button>;
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;