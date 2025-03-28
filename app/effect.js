import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

export default function effect() {


	useEffect(() => {

		console.log('cargó la pantalla');

		return () => {
			console.log('se desmontó la pantalla');
		}
	}, [])



	return (
		<View>
			<Text>effect</Text>
		</View>
	)
}
