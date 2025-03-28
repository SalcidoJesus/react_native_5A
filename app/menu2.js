import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import MenuItem from '../components/MenuItem2';
import Separador from '../components/Separador';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function Menu2() {


	const imagen_fuego = require('../assets/3d_fire.png');
	const menu_items = [
		{
			id: 1,
			nombre: 'Home',
			icono: <AntDesign name="home" size={30} color="green" />,
			ruta: '/'
		},
		{
			id: 2,
			nombre: 'Index settings',
			icono: <AntDesign name="setting" size={30} color="black" />,
			ruta: '/settings/'
		},
		{
			id: 3,
			nombre: 'Menu settings',
			icono: <AntDesign name="bars" size={30} color="brown" />,
			ruta: '/settings/menu'
		},
		{
			id: 4,
			nombre: 'FlexBox',
			icono: <AntDesign name="CodeSandbox" size={30} color="blue" />,
			ruta: '/cajas/flexbox'
		},
	];


	return (
		<View style={ estilos.contenedor }>


			{/* header */}
			<View style={ estilos.header }>
				<Image
					source={imagen_fuego}
					style={ estilos.logo }
					resizeMode='center'
				/>
				<Text style={ estilos.titulo }>
					JMSA
				</Text>
				<Text style={ estilos.subtitulo } >
					La mejor aplicación para aprender React Native usando Expo
				</Text>
			</View>


			{/* menu */}
			<FlatList
				data={ menu_items }
				renderItem={ ({ item }) => <MenuItem { ...item }/> }
			/>


		</View>
	)
}

const estilos = StyleSheet.create({
	contenedor: {
		padding: 20
	},
	header: {
		alignItems: 'center',
		gap: 8,
		marginBottom: 30
	},
	titulo: {
		fontSize: 25,
		fontWeight: 'thin'
	},
	subtitulo: {
		fontSize: 18,
		color: 'gray',
		textAlign: 'center'
	},
	logo: {
		height: 100,
	}
})
