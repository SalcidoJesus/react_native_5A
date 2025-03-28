import { View, Text, StyleSheet } from 'react-native'

export default function flexbox() {
	return (
		<View style={ estilos.contenedor }>
			<View style={[ estilos.forma_cuadrada, estilos.cuadro_rosa ]}>
				<Text>Cuadro 1</Text>
			</View>
			<View style={[ estilos.forma_cuadrada, estilos.cuadro_azul ]}>
				<Text>Cuadro 2</Text>
			</View>
			<View style={[ estilos.forma_cuadrada, estilos.cuadro_verde ]}>
				<Text>Cuadro 3</Text>
			</View>
		</View>
	)
}


/*
justify content
align items
align self
flex direction
*/


const estilos = StyleSheet.create({
	contenedor: {
		backgroundColor: 'skyblue',
		flex: 1,
		// alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	cuadro_rosa: {
		backgroundColor: 'pink',
		// alignSelf: 'flex-end',
		height: null
		// position: 'absolute',
		// height:
		// bottom: 0
		// flex: 1,
		// width: '100%',
		// height: '100%'
	},
	cuadro_verde: {
		backgroundColor: 'green',
		// alignSelf: 'flex-start',
		// flex: 1
		// flex: 1,
		// width: null,
		// height: 300,

	},
	cuadro_azul: {
		backgroundColor: '#28C4D9',
		// flex: 1,
		// width: '100%'
	},
	forma_cuadrada: {
		width: 100,
		height: 100,
		borderColor: 'white',
		borderWidth: 10
	}
})
