import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
	state = { text: '' };

	render() {
		return(
			<Card>
				<CardSection>
					<TextInput 
						style={{height: 20, width: 100}}
						onChangeText = {text => this.setState({ text })}
						value={this.state.text}
					/>
				</CardSection>
				<CardSection>
					<TextInput />
				</CardSection>
				<CardSection>
					<Button>
						Log in
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;