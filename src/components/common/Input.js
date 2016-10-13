import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label }) => {
	return (
		<View>
			<Text>{label}</Text>
			<TextInput></TextInput>
		</View>
	);
}

export { Input };