import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { COLOR_BLANCO, COLOR_GRIS, COLOR_GRIS_OSCURO } from '../constants/spotify_colors'

export default function PlayListItem({ titulo }) {


	return (
		<TouchableOpacity
			style={estilos.contenedor}
			activeOpacity={.6}
		>
			<Image
				style={estilos.imagen}
				source={ require('../assets/liked_songs.jpeg') }/>
			<Text
				style={estilos.titulo}
				numberOfLines={2}
			>
				{titulo}
			</Text>
		</TouchableOpacity>
	)
}

const estilos = StyleSheet.create({
	contenedor: {
		backgroundColor: COLOR_GRIS_OSCURO,
		flex: 1,
		height: 60,
		margin: 5,
		borderRadius: 10,
		flexDirection: 'row'
	},
	titulo: {
		fontSize: 18,
		color: COLOR_BLANCO,
		marginHorizontal: 10,
		textAlignVertical: 'center',
		width: 150
	},
	imagen: {
		height: 60,
		width: 60,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10
	}
})
