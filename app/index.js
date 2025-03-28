import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Menu2 from './menu2';
import Menu from './menu';
import Constants from 'expo-constants'


export default function App() {


	function cambiarPantalla() {
		// validaciones
		if ( true ) {
			router.push('/settings/menu');
		} else {
			router.push('/settings/menu');
		}
	}


	return (
		<View style={ estilos.contenedor }>

			<Menu />

			{/* <Button title='Menu Settings' color='red' onPress={ cambiarPantalla } />

			<Link href='menu'>pantalla Menu</Link>
			<Link href='menu2'>Menú chido</Link>
			<Link href='home'>pantalla Home</Link>

			<Link href='/settings/'>pantalla index settings</Link>
			<Link href='/settings/menu'>pantalla menu settings</Link>

			<Link href='/cajas/flexbox'>FlexBox</Link> */}

			<StatusBar style='dark' />
		</View>
	);

}

const estilos = StyleSheet.create({
	contenedor: {
		flex: 1,
		marginTop: Constants.statusBarHeight
		// alignItems: 'center',
		// justifyContent: 'center'
	}
})
