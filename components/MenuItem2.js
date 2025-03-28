
import { Link, router } from 'expo-router'
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';


export default function MenuItem({ nombre, icono: Icon, ruta }) {

	return (
		<TouchableOpacity
			style={ estilos.contenedor_item }
			onPress={ () => router.push(ruta) }
		>
			<View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
				{ Icon }
				<Text>{ nombre }</Text>
			</View>

			<AntDesign name="right" size={24} color="black" />
		</TouchableOpacity>
	)
}


const estilos = StyleSheet.create({

	contenedor_item: {
		marginVertical: 15,
		flexDirection: 'row',
		paddingRight: 10,
		gap: 10,
		alignItems: 'center',
		justifyContent: 'space-between'
		// margin: 10,
		// backgroundColor: 'red',
		// borderBottomColor: 'gray',
		// borderBottomWidth: 1
	}

})
