import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import MenuItem from '../components/MenuItem';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function Menu() {

	const logo_fuego = require('../assets/3d_fire.png');

	const menu_items = [
		{
			id: 1,
			titulo: 'FlexBox',
			icono: <Feather name="box" size={40} color="blue" />,
			enlace: '/cajas/flexbox'
		},
		{
			id: 2,
			titulo: 'Settings',
			icono: <AntDesign name="setting" size={40} color="black" />,
			enlace: '/settings/'
		},
		{
			id: 3,
			titulo: 'Menu settings',
			icono: <Ionicons name="menu-outline" size={40} color="green" />,
			enlace: '/settings/menu'
		},
		{
			id: 4,
			titulo: 'Spotify',
			icono: <Entypo name="spotify" size={40} color="green" />,
			enlace: 'spotify'
		},
		{
			id: 5,
			titulo: 'Estado',
			icono: <MaterialCommunityIcons name="state-machine" size={40} color="black" />,
			enlace: 'estado'
		},
		{
			id: 6,
			titulo: 'Effect',
			icono: <MaterialIcons name="change-circle" size={40} color="black" />,
			enlace: 'effect'
		},
		{
			id: 7,
			titulo: 'Tareas',
			icono: <FontAwesome name="tasks" size={40} color="black" />,
			enlace: 'listado_tareas'
		},
		{
			id: 8,
			titulo: 'fecha',
			icono: <FontAwesome name="tasks" size={40} color="black" />,
			enlace: 'fecha'
		},
	];

	return (
		<View>
			{/* header */}
			<View style={ estilos.header }>
				<Image style={ estilos.logo } source={ logo_fuego } resizeMode='contain'/>
				<Text style={ estilos.titulo }>JMSA</Text>
				<Text style={ estilos.subtitulo }>La mejor aplicación para invertir bitcoin en Escuinapa Sinaloa México</Text>
			</View>

			{/* lista */}
			<FlatList
				data={ menu_items }
				renderItem={ ({ item }) => <MenuItem titulo={item.titulo} icono={item.icono} enlace={item.enlace} />  }
			/>

		</View>
	)
}

const estilos = StyleSheet.create({
	header: {
		marginVertical: 30,
		marginHorizontal: 20,
		alignItems: 'center'
	},
	logo: {
		height: 150
	},
	titulo: {
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'thin'
	},
	subtitulo: {
		textAlign: 'center',
		fontSize: 18,
		color: 'gray'
	},
})
