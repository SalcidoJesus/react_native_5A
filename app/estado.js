
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

export default function estado() {

	// aquí van variables
	var numero = 0;

	// num contiene el valor
	// setNum actualiza el valor
	// 5 es el valor por defecto de num
	const [num, setNum] = useState(5)

	function sumar() {
		numero++;
		console.log(numero);
		setNum( num + 1 )
	}

	function restar() {
		setNum( num - 1 )
	}

	const multiplicar = () => setNum( num * 2 )

	console.log('hola :D componente renderizado');

	// useEffect
	// se ejecuta cuando el componente se renderiza
	useEffect(() => {
	  // cuando la pantalla carga, se ejecuta esto:
		console.log('hola :D primera vez que se renderiza');
		// tarea:
		// * hacer que se eejcute cuando salgo de la pantalla
		// * hacer que se ejecute cuando cambia la variable num

	}, [])


	return (
		<View style={ style.contenedor }>
			<Text style={{ fontSize: 40 }}>
				{ num }
			</Text>
			<Button title='sumar 1' onPress={ sumar } />
			<Button title='reste 1' onPress={ restar }/>
			<Button title='multiplicar x 2' onPress={ multiplicar }/>
			<Button title='reiniciar' onPress={ () => setNum(0) } />
			<Button title='colocar en 100' onPress={ () => setNum(100) } />
		</View>
	)
}

const style = StyleSheet.create({
	contenedor: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10
	}
})
