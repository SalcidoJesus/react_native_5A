
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR_GRIS } from '../constants/spotify_colors'

export default function PortadaCuadrada({ nombre, portada }) {
	return (
		<TouchableOpacity
			style={{ marginHorizontal: 10, maxWidth: 200 }}
			activeOpacity={ .6 }
		>
			<Image
				source={ portada }
				style={ { width: 200, height: 200 } }/>
			<Text style={ estilos.texto } numberOfLines={2}>
				This is: { nombre }. Sus mejores éxitos, todos en una playlist.
			</Text>
		</TouchableOpacity>
	)
}

const estilos = StyleSheet.create({
	texto: {
		color: COLOR_GRIS,
		fontSize: 18,
		marginVertical: 10
	}
})
