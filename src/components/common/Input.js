import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label, onChangeText, value }) => {
	return (
		<View>
			<Text>{label}</Text>
			<TextInput 
				style={{ height: 20, width: 100}}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
}

export { Input };