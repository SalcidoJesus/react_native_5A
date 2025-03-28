
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { COLOR_BLANCO, COLOR_GRIS } from '../constants/spotify_colors'

export default function PortadaRedonda({ nombre, portada }) {
	return (
		<TouchableOpacity
			style={{ marginHorizontal: 10, maxWidth: 200 }}
			activeOpacity={ .6 }
		>
			<Image
				source={{ uri: portada }}
				style={ { width: 200, height: 200, borderRadius: 100 } }/>
			<Text style={ estilos.texto } numberOfLines={2}>
				{ nombre }
			</Text>
		</TouchableOpacity>
	)
}

const estilos = StyleSheet.create({
	texto: {
		color: COLOR_BLANCO,
		fontSize: 18,
		marginVertical: 10,
		textAlign: 'center'
	}
})
