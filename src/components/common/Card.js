import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
	const { containerStyle } = styles;

	return (
		<View style={containerStyle} >
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 1,
		borderColor: '#DDD',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 1,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	}
};

export { Card };
