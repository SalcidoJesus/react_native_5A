import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native'

export default function App() {

	// aquí declaramos variables y funciones
	var mensaje = 'hola mundo';
	function saludar() {
		console.log(mensaje);
		alert('hola');
	}


	return (
		<View style={ estilos.contenedor }>
			<Text>Hola mundo desde React Native</Text>
			<Button title='Saludar' color='red' onPress={ saludar }/>
			<StatusBar style='light' />
		</View>
	);

}

const estilos = StyleSheet.create({
	contenedor: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
