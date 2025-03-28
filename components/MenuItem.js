import { Link, router } from 'expo-router'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function MenuItem({ titulo, enlace, icono }) {


	return (
		<TouchableOpacity style={ estilos.link_item } onPress={ () => router.push(enlace) }>
			<View style={ estilos.icono_titulo }>
				{ icono }
				<Text>{titulo}</Text>
			</View>
			<AntDesign name="right" size={24} color="black" />
		</TouchableOpacity>
	)
}


const estilos = StyleSheet.create({
	link_item: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 5,
		marginHorizontal: 20,
		borderBottomColor: 'gray',
		borderBottomWidth: 1
	},
	icono_titulo: {
		flexDirection: 'row',
		gap: 15,
		alignItems: 'center'
	}
})

